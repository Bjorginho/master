"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { usePageHeader } from "@/context/PageHeaderContext";
import { useStudentData } from "@/context/StudentContext";
import { it1901Mock, it2810Mock, tet4850Mock } from "@/data/groupData";
import { GroupData } from "@/hooks/useGroup";
import { set } from "date-fns";
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
  const { course, setGroupData } = useStudentData();
  const [groups, setGroups] = useState<GroupData[]>([]);
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

  // useEffect(() => {
  //   if (course === "IT2810") setGroups(it2810Mock);
  //   else if (course === "TET4854") setGroups(tet4850Mock);
  //   else if (course === "IT1901") setGroups(it1901Mock);
  //   else
  //     setGroups([
  //       { id: "1", members: [{ firstName: "Andreas", lastName: "Bakke" }] },
  //     ]);
  // }, [course]);

  useEffect(() => {
    if (groups.length === 1) {
      const group = groups[0];
      setGroupData(group);
      redirect(pathname + "/group?id=" + group.id);
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

const GroupCard = ({ group }: { group: GroupData }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { setGroupData } = useStudentData();

  const handleClick = () => {
    setGroupData(group);
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
