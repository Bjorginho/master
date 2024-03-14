import { useEffect, useState } from "react";

export interface GroupData {
  id: string;
  courseId: string;
  members: Member[];
}

interface Member {
  firstName: string;
  lastName: string;
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
