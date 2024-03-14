"use client";

import { usePageHeader } from "@/context/PageHeaderContext";
import { Button } from "../ui/button";
import { MoveLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const PageHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { headerText } = usePageHeader();

  return (
    <div className="flex justify-between w-full mb-4 relative">
      {pathname !== "/" && (
        <>
          <Button
            variant={"outline"}
            size={"icon"}
            className="rounded-full"
            onClick={() => router.back()}
          >
            <MoveLeft />
          </Button>
          <h1 className="text-xl font-semibold absolute left-1/2 transform -translate-x-1/2">
            {headerText}
          </h1>
        </>
      )}
    </div>
  );
};

export default PageHeader;
