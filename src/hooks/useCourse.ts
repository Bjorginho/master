import { useEffect, useState } from "react";

export interface Course {
  name: string;
  lecturer: string;
  description: string;
}

export const useCourse = (courseId: string) => {
  const [loadingCourse, setLoadingCourse] = useState(false);
  const [course, setCourse] = useState<Course>();

  useEffect(() => {
    const fetchData = async () => {
      setLoadingCourse(true);
      const res = await fetch(`/api/course?courseId=${courseId}`);
      const data = await res.json();
      setCourse(data);
      setLoadingCourse(false);
    };
    fetchData();
  }, [courseId]);

  return { loadingCourse, course };
};
