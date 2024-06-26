import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { useStudentData } from "@/context/StudentContext";
import { Course, Student } from "@prisma/client";

type Props = {
  course: Course;
  student?: Student | null;
};

const CourseCard = (props: Props & React.HTMLAttributes<HTMLDivElement>) => {
  const { setCurrentCourse } = useStudentData();

  const {
    course: { code, description, name, institute },
    student,
  } = props;

  return (
    <Card {...props}>
      <div className="flex flex-col size-full">
        <CardHeader className="text-xs">
          <p className="font-semibold">{code}</p>
          <p>{institute}</p>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow justify-between gap-2 ">
          <h2 className="font-bold text-xl">{name}</h2>
          <div className="flex-grow h-full">
            <p className="text-sm">{description}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link
              onClick={() => setCurrentCourse(code)}
              href={{
                pathname: "/student/" + code,
                query: {
                  studentId: student?.id,
                },
              }}
            >
              Go to course
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default CourseCard;
