import React, { useEffect, useRef } from "react";
import { useToast } from "@/components/ui/ToastContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  newsletterSchema,
  type NewsletterInput,
} from "@/components/Newsletter/schema";
import { TriangleAlert } from "lucide-react";
// import {Warn}

export const Newsletter: React.FC = () => {
  const { addToast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
  });

  useEffect(() => {
    const handleFocusSignal = () => {
      if (inputRef.current){
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        inputRef.current?.focus();
        addToast("Please enter your email to stay up to date with our progress.", "info");
      }
    };

    window.addEventListener("gii-focus-newsletter", handleFocusSignal);
    return () => window.removeEventListener("gii-focus-newsletter", handleFocusSignal);
  }, [addToast]);

  const onSubmit = async (data: NewsletterInput) => {
    try {
      // Direct communication to our background Astro proxy server route
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Server ingestion failed.");
      }

      // Update backend tracking stats asynchronously
      window.dispatchEvent(new CustomEvent("gii-increment-backer"));
      addToast(
        "Thank you for subscribing to the newsletter!",
        "success",
      );
      reset();
    } catch (err: any) {
      addToast(err.message || "Network registration failure.", "error");
    }
  };

  const { ref: hookFormRef, ...emailRegisterRest } = register('email');

  return (
    <footer className="bg-linear-to-b from-emerald-950 to-emerald-800 border-t border-green-100 py-20 px-4 mt-20 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
          Get notified when we launch.
        </h2>
        <p className="text-base text-green-100 mb-8 mx-auto">
          Receive transparent, verifiable updates on our launch progress.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-3 bg-emerald-950 p-2.5 rounded-2xl border border-emerald-800/70 focus-within:border-lime-400 focus-within:ring-2 focus-within:ring-lime-400/20 transition-all duration-300 shasow-xl shadow-black/20">
            <input
              type="text"
              {...emailRegisterRest}
              ref={(e) => {
                hookFormRef(e);
                inputRef.current = e;
              }}
              placeholder="Enter email address"
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 bg-transparent rounded-xl text-white placeholder-emerald-300/70 focus:outline-none text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-lime-400 hover:bg-lime-300 text-emerald-950 font-semibold rounded-xl text-sm transition-all duration-300 whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98] cursor-pointer"
            >
              {isSubmitting ? "Sending..." : "Get Notified"}
            </button>
          </div>

          {/* Real-time validation warning message label */}
          {errors.email && (
            <p className="text-sm font-semibold text-rose-200 text-left pl-4 animate-in fade-in duration-200 flex items-center gap-1">
              <TriangleAlert className="size-4"/> {errors.email.message}
            </p>
          )}
        </form>
      </div>
    </footer>
  );
};
