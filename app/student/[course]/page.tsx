"use client";

import JoinGroupForm from "@/components/Form/JoinGroup/JoinGroupForm";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { usePageHeader } from "@/context/PageHeaderContext";
import { GroupMember } from "@prisma/client";
import Link from "next/link";
import {
  redirect,
  useParams,
  usePathname,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";

const Course = () => {
  const params = useParams<{ course: string }>();
  const searchParams = useSearchParams();

  const [courseCode, setCourseCode] = useState<string | null>(null);
  const [studentId, setStudentId] = useState<string | null>(null);

  const { setHeaderText } = usePageHeader();
  const [groups, setGroups] = useState<GroupMember[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    setHeaderText("");
  }, [setHeaderText]);

  useEffect(() => {
    if (!courseCode && params.course) {
      setCourseCode(params.course);
    }
    if (!studentId && searchParams.get("studentId")) {
      setStudentId(searchParams.get("studentId"));
    }
  }, [params, searchParams]);

  async function fetchGroups() {
    const response = await fetch(
      `/api/group?courseId=${courseCode}&studentId=${studentId}`
    );
    const data = await response.json();
    setGroups(data);
  }

  useEffect(() => {
    if (courseCode && studentId) {
      fetchGroups();
    }
  }, [courseCode, studentId]);

  useEffect(() => {
    if (groups.length === 1) {
      redirect(pathname + "/group?id=" + groups[0].id);
    }
  }, [groups]);

  return (
    <div>
      {groups.length > 0 ? (
        <>
          <h1 className="text-center font-semibold mb-4">Select group</h1>
          <div className="flex gap-2 justify-center">
            {groups.map((group, index) => (
              <GroupCard key={index} group={group} studentId={studentId} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-center font-semibold mb-4">
            You have not joined a group yet
          </h1>
          <div className="text-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Join a group</Button>
              </DialogTrigger>
              <DialogContent className="overflow-y-scroll max-h-[90vh]">
                <JoinGroupForm />
              </DialogContent>
            </Dialog>
          </div>
        </>
      )}
    </div>
  );
};

const GroupCard = ({
  group,
  studentId,
}: {
  group: GroupMember;
  studentId?: string | null;
}) => {
  const pathname = usePathname();

  return (
    <Card>
      <CardHeader>
        <h2 className="text-center">{group.id}</h2>
      </CardHeader>
      <CardFooter>
        <Button asChild>
          <Link
            href={{
              pathname: pathname + "/group",
              query: { id: group.id, studentId: studentId },
            }}
          >
            Go to group
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Course;
