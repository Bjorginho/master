"use client";

import FeedbackForm from "@/components/Form/FeedbackForm";
import { Card } from "@/components/ui/card";
import { Feedback } from "@/types/Feedback";
import { useSearchParams } from "next/navigation";

export default function Review() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div className="">
      <h1 className="text-center font-bold">Feedback id: {id}</h1>
      <Card className="p-12 w-2/3 mx-auto">
        <FeedbackForm feedback={exampleFeedback} />
      </Card>
    </div>
  );
}

const exampleFeedback: Feedback = {
  id: "feedback101",
  kind: "person",
  title: "Feedback on group work: 13. feb - 20. feb",
  desription:
    "This feedback is meant to better the group experience throughtout the course and improve the group dynamic.",
  questions: [
    {
      question:
        "How would you rate the collaboration in the group on a scale from 1 to 5, where 1 is very poor and 5 is excellent?",
      answerKind: "number",
    },
    {
      question:
        "On a scale from 1 to 5, how would you rate the communication within the group, where 1 indicates many misunderstandings and 5 indicates highly effective communication?",
      answerKind: "number",
    },
    {
      question:
        "How would you rate the overall functioning of the group and the participation of the other members on a scale from 1 to 5, where 1 is very poor and 5 is excellent?",
      answerKind: "number",
    },
    {
      question:
        "Is there anything else you would like to share about your experience with the group work, any thoughts or feelings that haven't been covered by the previous questions?",
      answerKind: "text",
    },
  ],
};
