import { BackProjectButton } from "../support/donation/components/BackProjectButton";

export function Hero() {
   const basePath = import.meta.env.BASE_URL;
  return (
    <section id="hero" className="mx-auto px-4 text-center mb-20 lg:mb-10">
      <h1
        className="sr-only">
        Green Impact Innovators
      </h1>
      <div className="flex items-center justify-center mb-20"><img src={`${basePath}/images/main-logo.webp`} alt="Green Impact Innovators" className="object-cover --mix-blend-color-burn" width={300} height={300}/></div>
      <p
        className="
          mx-auto
          mt-6
          max-w-2xl

          text-lg
          leading-relaxed

          text-[#4B5C54]
        "
      >
       Empowering school communities in Kisumu to tackle climate change and food insecurity through low-cost, student-led forest gardens. Partner with us as a mentor, supporter, or strategic ally to help scale our impact.
      </p>
      <div className="flex items-center justify-center mt-12">
        <BackProjectButton />
      </div>
    </section>
  );
}