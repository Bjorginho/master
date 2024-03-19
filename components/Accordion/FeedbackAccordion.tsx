import { Feedback } from "@/app/student/[course]/group/feedback/peer/page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

const FeedbackAccordion = (props: { feedbackList: Feedback[] }) => {
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
                <Button size={"sm"}>Go to review</Button>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <p>Reviewed: 07.05.2024</p>
                <Button variant={"outline"} size={"sm"}>
                  Go to review
                </Button>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FeedbackAccordion;
