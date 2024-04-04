import {
  Assignment,
  GroupReview,
  PeerReview,
} from "@/app/student/[course]/group/page";
import { useEffect, useState } from "react";

export interface GroupData {
  id: string;
  members: Member[];
  assignments?: Assignment[];
  peerReviews?: PeerReview[];
  groupReviews?: GroupReview[];
  links?: Channel[];
}

export interface Channel {
  name: "GitLab" | "GitHub" | "Discord" | "Teams";
  url: string;
}

export interface Member {
  firstName: string;
  lastName: string;
  fieldOfStudy?: string;
  year?: number;
  email: string;
}

export const useGroup = (courseId: string, userId: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<GroupData>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        `/api/group?courseId=${courseId}&userId=${userId}`
      );
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, [courseId, userId]);

  return { loading, data };
};
