import { Course as CourseType } from "@/types/types";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  course: CourseType;
};

const Course = (props: Props & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card {...props}>
      <CardHeader>{props.course.courseCode}</CardHeader>
      <CardContent className="flex flex-col justify-between gap-2 ">
        <h2 className="font-bold text-xl">{props.course.name}</h2>
        <div className="flex-grow h-full">
          <p className="text-sm">{props.course.description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild>
          <Link href={"/student/" + props.course.courseCode}>Go to course</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Course;
