"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { usePageHeader } from "@/context/PageHeaderContext";
import { useStudentData } from "@/context/StudentContext";
import { it1901Mock, it2810Mock, tet4850Mock } from "@/data/groupData";
import { GroupData } from "@/hooks/useGroup";
import { GroupMember } from "@prisma/client";
import {
  redirect,
  useParams,
  usePathname,
  useRouter,
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
      <h1 className="text-center font-semibold mb-4">Select group</h1>
      <div className="flex gap-2 justify-center">
        {groups.map((group, index) => (
          <GroupCard key={index} group={group} />
        ))}
      </div>
    </div>
  );
};

const GroupCard = ({ group }: { group: GroupMember }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    router.push(pathname + "/group?id=" + group.id);
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-center">{group.id}</h2>
      </CardHeader>
      <CardFooter>
        <Button onClick={handleClick}>Go to group</Button>
      </CardFooter>
    </Card>
  );
};

export default Course;
