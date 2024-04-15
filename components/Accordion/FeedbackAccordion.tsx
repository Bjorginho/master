"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";

const FeedbackAccordion = (props: { feedbackList: any[] }) => {
  const feedbackList = props.feedbackList;

  return (
    <Accordion type="multiple" className="w-full">
      {feedbackList.map(({ status, title }, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>
            <p>{title}</p>
            {status === "not started" && <p>Not started</p>}
          </AccordionTrigger>
          <AccordionContent className="py-4">
            {status === "not started" ? (
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <p>You have not yet started with this review</p>
                </div>
                <ReviewButton />
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <p>Reviewed: 07.05.2024</p>
                <ReviewButton />
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const ReviewButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick(): void {
    router.push(pathname + "/review");
  }

  return (
    <Button variant={"outline"} size={"sm"} onClick={handleClick}>
      Go to review
    </Button>
  );
};

export default FeedbackAccordion;
