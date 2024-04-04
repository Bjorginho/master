"use client";
import { useStudentData } from "@/context/StudentContext";
import { useCourse } from "@/hooks/useCourse";
import { Announcement } from "@prisma/client";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Announcements = () => {
  const { course } = useStudentData();
  const d = useCourse(course);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  const fetchAnnouncements = async () => {
    console.log("fetching announcements");
    const res = await fetch(`/api/announcements?courseId=${course}`);
    const data = await res.json();
    setAnnouncements(data);
  };

  useEffect(() => {
    if (course && announcements.length === 0) {
      fetchAnnouncements();
    }
  }, [course, announcements]);

  return (
    <div>
      {announcements.length > 0 && (
        <AnnouncemmentsAccordion data={announcements} />
      )}
    </div>
  );
};

const AnnouncemmentsAccordion = ({ data }: { data: Announcement[] }) => {
  return (
    <Accordion type="multiple">
      {data.map((announcement, index) => (
        <AccordionItem key={index} value={announcement.id.toString()}>
          <AccordionTrigger>
            <h3>{announcement.title}</h3>
          </AccordionTrigger>
          <AccordionContent>
            <p>{announcement.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Announcements;
