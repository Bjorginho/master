"use client";

import { Button } from "@/components/ui/button";
import { usePageHeader } from "@/context/PageHeaderContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Feedback = () => {
  const { setHeaderText } = usePageHeader();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setHeaderText("Feedback");
  }, []);

  const handleClick = (to: string) => {
    router.push(pathname + to);
  };

  return (
    <div>
      <section>
        <Button onClick={() => handleClick("/peer")}>Peer Reviews</Button>
        <Button onClick={() => handleClick("/group")}>Group Evaluation</Button>
      </section>
    </div>
  );
};

export default Feedback;
