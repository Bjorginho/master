"use client";

import { Button } from "../ui/button";
import { MoveLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const PageHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex justify-between w-full mb-4">
      {pathname !== "/" && (
        <>
          <Button
            variant={"outline"}
            className="rounded-full"
            onClick={() => router.back()}
          >
            <MoveLeft />
          </Button>
          {/* <h1 className="text-xl">TEST</h1> */}
        </>
      )}
    </div>
  );
};

export default PageHeader;
