import { Course as CourseType } from "@/types/types";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  course: CourseType;
};

const Course = (props: Props) => {
  return (
    <Card className="h-full">
      <CardHeader>{props.course.courseCode}</CardHeader>
      <CardContent className="flex flex-col gap-2 h-full">
        <h2 className="font-bold text-2xl">{props.course.name}</h2>
        <div className="">
          <p>{props.course.description}</p>
          <div className="flex justify-center">
            <Button asChild>
              <Link href={props.course.courseCode}>Go to course</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Course;
