"use client";

import AssignmentForm from "@/components/Form/Assignment/AssignmentForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { usePageHeader } from "@/context/PageHeaderContext";
import { assignment1 } from "@/data/assignments";
import { fetchAssignment } from "@/services/fetch";
import { Assignment } from "@prisma/client";
import { format } from "date-fns";
import { CircleCheck, FileText } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AssignmentPage = () => {
  const { setHeaderText } = usePageHeader();
  const [isDelivered, setIsDelivered] = useState(false);
  const searchParams = useSearchParams();
  const groupId = searchParams.get("groupId");
  const assignmentId = searchParams.get("id");
  const [assignment, setAssignment] = useState<Assignment | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!assignmentId) return;
      const assignment: Assignment = await fetchAssignment(assignmentId);
      setAssignment(assignment);
    };

    if (assignmentId) {
      setHeaderText("Assignment " + assignmentId);
      fetchData();
    }
  }, []);

  return (
    <div className="grid grid-cols-12 gap-2">
      {assignment && (
        <section className="col-span-6">
          <div className="flex gap-2 items-center ">
            <FileText size={120} />
            <div>
              <h1 className="font-bold">{assignment?.title}</h1>
              <div className="grid grid-cols-3">
                <p className="font-bold">Due:</p>
                <p className="col-span-2">
                  {new Date(assignment.dueDate).toDateString()}
                </p>
                <p className="font-bold">Time:</p>
                <p className="col-span-2">
                  {format(new Date(assignment.dueDate), "HH:mm")}
                </p>
              </div>
            </div>
          </div>
          <p>{assignment.description}</p>
        </section>
      )}
      <Card className="col-span-6">
        <CardHeader>
          <div className="flex justify-between">
            <h2 className="font-semibold">Submission details</h2>
            {isDelivered ? (
              <div className="flex gap-2 items-center">
                <CircleCheck />
                <p>Delivered</p>
              </div>
            ) : (
              <p>Not delivered</p>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <AssignmentForm fnAction={setIsDelivered} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AssignmentPage;
