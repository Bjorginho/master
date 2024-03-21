import { Course as CourseType } from "@/types/types";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { useStudentData } from "@/context/StudentContext";

type Props = {
  course: CourseType;
};

const Course = (props: Props & React.HTMLAttributes<HTMLDivElement>) => {
  const { setCurrentCourse } = useStudentData();

  const {
    course: { courseCode, description, name },
  } = props;

  return (
    <Card {...props}>
      <CardHeader>{courseCode}</CardHeader>
      <CardContent className="flex flex-col justify-between gap-2 ">
        <h2 className="font-bold text-xl">{name}</h2>
        <div className="flex-grow h-full">
          <p className="text-sm">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild>
          <Link
            onClick={() => setCurrentCourse(courseCode)}
            href={"/student/" + courseCode}
          >
            Go to course
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Course;
