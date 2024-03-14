"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { usePageHeader } from "@/context/PageHeaderContext";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import path from "path";
import { useEffect } from "react";

const Course = () => {
  const searchParams = useSearchParams();
  const groupId = searchParams.get("groupId");
  const pathname = usePathname();
  const { setHeaderText } = usePageHeader();

  useEffect(() => {
    const course = pathname.split("/")[2];
    setHeaderText(course);
  }, [pathname, setHeaderText]);

  return (
    <div className="flex gap-2 justify-center">
      <GroupCard name={"Group 1"} id={"1"} />
      <GroupCard name={"Group 2"} id={"2"} />
      <GroupCard name={"Group 3"} id={"3"} />
    </div>
  );
};

const GroupCard = (props: { name: string; id: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    router.push(pathname + "/group?id=" + props.id);
  };

  return (
    <Card>
      <CardHeader>
        <h2>{props.name}</h2>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <Button onClick={handleClick}>Go to group</Button>
      </CardFooter>
    </Card>
  );
};

export default Course;
