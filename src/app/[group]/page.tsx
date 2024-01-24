import Members from "@/components/Members";
import StatusGroup from "@/components/StatusGroup";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function Page({ params }: { params: { group: string } }) {
  const iconSize = 48;

  return (
    <main className="container mx-auto mt-8">
      <div className="flex justify-between w-full">
        <Link href={"/"}>
          <Button variant={"outline"} className="rounded-full">
            <MoveLeft />
          </Button>
        </Link>
        <h1 className="text-xl">Group {params.group}</h1>
        <Link href="#">
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-6 my-8">
        <StatusGroup
          iconSize={iconSize}
          className="col-span-6 bg-cardX rounded-lg container py-6"
        />
        <div className="col-span-6 ">Hello </div>
        <Members
          className="col-span-6 bg-cardX rounded-lg container py-6"
          members={[
            { firstName: "Kaja", lastName: "Sandnes" },
            { firstName: "John", lastName: "Loken" },
            { firstName: "Brad", lastName: "Pitt" },
            { firstName: "Joe", lastName: "Rogan" },
            { firstName: "Frodo", lastName: "Baggins" },
          ]}
        />
      </div>
    </main>
  );
}
