"use client";
import { useStudentData } from "@/context/StudentContext";
import { Announcement } from "@prisma/client";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fetchAnnouncements } from "@/services/fetch";

const Announcements = () => {
  const { course } = useStudentData();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const announcements: Announcement[] = await fetchAnnouncements(course);
      setAnnouncements(announcements);
    };
    if (course && announcements.length === 0) {
      fetchData();
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
