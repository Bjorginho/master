"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Smile, Meh, Frown, LucideIcon } from "lucide-react";
import { givenFeedback, incomingFeedback } from "./data";
import { Button } from "@/components/ui/button";
import MyChart from "@/components/Chart/Chart";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface GroupFeedback {
  title: string;
  description: string;
  isCompleted?: boolean;
  isOpened?: boolean;
}

const Group = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <UpcomingFeedback className="col-span-6" />
      <StatusCard className="col-span-6" />
      <GivenFeedback className="col-span-6" />
      <div className="col-span-6">
        <MyChart />
      </div>
    </div>
  );
};

const UpcomingFeedback = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  return (
    <Card className={cn(className)}>
      <CardHeader className="p-3 pb-0">
        <h2 className="text-md">Upcoming feedback</h2>
      </CardHeader>
      <CardContent className="p-3">
        <div className="bg-[#fff] rounded-md p-4 flex flex-col gap-2">
          {incomingFeedback.map((feedback, index) => (
            <Card key={index} className="bg-[#E8E7DF]">
              <CardHeader className="pb-3">
                <p className="font-semibold">{feedback.title} </p>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-sm">{feedback.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                {!feedback.isCompleted && <p className="text-sm">Missing</p>}

                <Button size={"sm"} asChild>
                  <Link href={{ pathname: pathname + "/review" }}>
                    Evaluate
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const GivenFeedback = ({ className }: { className?: string }) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="p-3 pb-0">
        <h2 className="text-md">Feedback I have provided</h2>
      </CardHeader>
      <CardContent className="p-3">
        <div className="bg-[#fff] rounded-md p-4 flex flex-col gap-2">
          {givenFeedback.map((feedback, index) => (
            <Card key={index} className="bg-[#E8E7DF]">
              <CardHeader className="pb-3">
                <p className="font-semibold">{feedback.title} </p>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-sm">{feedback.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const StatusCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("h-min", className)}>
      <CardHeader>
        <h2 className="text-center">WEEK 12</h2>
      </CardHeader>
      <CardContent className="flex justify-between px-12">
        <StatusWithEmoji value={2.3} description="Participation" />
        <StatusWithEmoji value={3.1} description="Communication" />
        <StatusWithEmoji value={1} description="Collaboration" />
      </CardContent>
    </Card>
  );
};

const StatusWithEmoji = (props: { value: number; description: string }) => {
  const renderIcon = () => {
    const value = props.value;
    let Icon: LucideIcon;
    if (value >= 3) Icon = Smile;
    else if (value >= 2) Icon = Meh;
    else Icon = Frown;
    return <Icon size={48} strokeWidth={1} />;
  };

  return (
    <div className="flex flex-col items-center">
      {renderIcon()}
      <p className="text-xl font-semibold">{props.value}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Group;
