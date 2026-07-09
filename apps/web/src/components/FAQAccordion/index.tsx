import { localFAQData } from "@/data/faqData";
// import { X, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQAccordion: React.FC = () => {

  return (
    <section className="max-w-5xl mx-auto my-16 px-4">
      <h2 className="text-2xl md:text-3xl font-black text-center text-green-900 mb-8 tracking-tight">
        FAQs
      </h2>

      <Accordion multiple className="space-y-4" defaultValue={["certification"]}>
        {localFAQData.map((item) => {
          return (
            <AccordionItem key={item.value} value={item.value} className="px-6 py-3 bg-green-200 rounded-lg">
              <AccordionTrigger className="font-semibold text-emerald-950 font-heading text-xl decoration-0">{item.trigger}</AccordionTrigger>
              <AccordionContent className="text-emerald-950 leading-relaxed text-base font-body">{item.content}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};
