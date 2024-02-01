"use client";

import { Button } from "../ui/button";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const PageHeader = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between w-full">
      <Button
        variant={"outline"}
        className="rounded-full"
        onClick={() => router.back()}
      >
        <MoveLeft />
      </Button>
      {/* <h1 className="text-xl">TEST</h1> */}
    </div>
  );
};

export default PageHeader;
