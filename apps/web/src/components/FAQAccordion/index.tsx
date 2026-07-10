import { localFAQData } from "@/data/faqData";
import { cn } from "@/lib/utils"; 

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQAccordion: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto my-16 px-4">
      <h2 className="text-2xl md:text-3xl font-black text-center text-green-900 mb-8 tracking-tight">
        FAQs
      </h2>

      <Accordion multiple className="w-full" defaultValue={["certification"]}>
        {localFAQData.map((item) => {
          return (
            <AccordionItem 
              key={item.value} 
              value={item.value} 
              className="border-b border-slate-200 py-1 last:border-0"
            >
              <AccordionTrigger 
                className={cn(
                  "flex flex-1 items-center justify-between py-4 text-left font-heading text-lg md:text-xl hover:no-underline transition-all duration-200",
                  "font-semibold text-emerald-950 hover:text-green-700",
                  "data-[state=open]:text-green-700 data-[state=open]:font-black"
                )}
              >
                {item.trigger}
              </AccordionTrigger>
              
              <AccordionContent className="pb-4 text-slate-600 leading-relaxed text-base font-body">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};