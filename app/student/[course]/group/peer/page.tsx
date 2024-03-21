"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { usePageHeader } from "@/context/PageHeaderContext";
import { CircleCheckBig } from "lucide-react";
import { useEffect, useState } from "react";
import Feedback from "../page";
import FeedbackAccordion from "@/components/Accordion/FeedbackAccordion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

interface Assignment {
  assignment: string;
  isCompleted?: boolean;
  dueDate?: string;
  reviews: Feedback[];
}

export interface Feedback {
  title: string;
  status: "not started" | "completed";
  description?: string;
}

const assignment5: Assignment = {
  assignment: "Assignment 5",
  isCompleted: true,
  dueDate: "12.05.2024",
  reviews: [
    {
      title: "Review of submission 1",
      status: "completed",
      description: "",
    },
    {
      title: "Review of submission 2",
      status: "completed",
      description: "",
    },
  ],
};

const assignment4: Assignment = {
  assignment: "Assignment 4",
  isCompleted: false,
  dueDate: "11.05.2024",
  reviews: [
    {
      title: "Review of submission 1",
      status: "completed",
      description: "",
    },
    {
      title: "Review of submission 2",
      status: "not started",
      description: "",
    },
    {
      title: "Review of submission 3",
      status: "not started",
      description: "",
    },
  ],
};

export default function PeerReview() {
  const { setHeaderText } = usePageHeader();

  useEffect(() => {
    setHeaderText("Peer Review");
  }, []);

  return (
    <div className="flex gap-2 ">
      <FeedbackCard
        title="Incoming feedback"
        data={[assignment4, assignment5]}
      />
      <FeedbackCard title="Your peer reviews" data={[assignment5]} />
    </div>
  );
}

const FeedbackCard = (props: { title: string; data: Assignment[] }) => {
  return (
    <Card className="w-2/4">
      <CardHeader>
        <h2>{props.title}</h2>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 bg-white p-6 rounded-md">
          {props.data.map((assignment, index) => (
            <AssignmentCard key={index} assignment={assignment} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const AssignmentCard = (props: { assignment: Assignment }) => {
  const { assignment, reviews, dueDate, isCompleted } = props.assignment;
  const [showSubmission, setShowSubmission] = useState(!isCompleted);

  return (
    <Card className="bg-[#E8E7DF]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h1>{assignment}</h1>
          <div className="flex items-center gap-2 font-semibold">
            {isCompleted ? (
              <>
                <CircleCheckBig className="stroke-bg-green-500" />
                <p>Complete</p>
              </>
            ) : (
              <div className="flex flex-col items-end">
                <p>Not finished</p>
                <p className="font-light text-sm">Missing 2 reviews</p>
              </div>
            )}
          </div>
        </div>
        <p className="">
          due date: <span>{dueDate}</span>
        </p>
      </CardHeader>
      <CardContent>
        <Button
          className={cn(!isCompleted && "hidden")}
          variant={"outline"}
          size={"sm"}
          onClick={() => setShowSubmission(!showSubmission)}
        >
          {showSubmission ? "Hide" : "Show reviews"}
        </Button>
        <div className={cn(!showSubmission && "hidden")}>
          <FeedbackAccordion feedbackList={reviews} />
        </div>
      </CardContent>
    </Card>
  );
};
