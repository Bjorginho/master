import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FileText, UsersRound } from "lucide-react";

export function CourseCarousel() {
  const ICON_SIZE = 64;
  const items = [
    {
      icon: <FileText size={ICON_SIZE} />,
      title: "Assignment 3",
      due: "October 10th",
    },
    {
      icon: <UsersRound size={ICON_SIZE} />,
      title: "Assignment 3",
      due: "October 10th",
    },
    {
      icon: <UsersRound size={ICON_SIZE} />,
      title: "Assignment 3",
      due: "October 10th",
    },
  ];
  return (
    <Carousel className="w-full lg:w-2/4 mx-auto">
      <CarouselContent>
        {items.map((item, index) => (
          <>
            <CarouselItem key={index} className="">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-auto items-center justify-center p-8 gap-3">
                    {item.icon}
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="font-light">{item.due}</p>
                      <p>{"16:30"}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
