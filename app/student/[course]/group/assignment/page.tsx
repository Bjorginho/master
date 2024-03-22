"use client";

import AssignmentForm from "@/components/Form/Assignment/AssignmentForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { usePageHeader } from "@/context/PageHeaderContext";
import { CircleCheck, FileText } from "lucide-react";
import { useEffect, useState } from "react";

const Assignment = () => {
  const { setHeaderText } = usePageHeader();
  const [isDelivered, setIsDelivered] = useState(false);

  useEffect(() => {
    setHeaderText("");
  }, []);

  return (
    <div className="grid grid-cols-12 gap-2">
      <section className="col-span-6">
        <div className="flex gap-2 items-center ">
          <FileText size={120} />
          <div>
            <h1 className="font-bold">Assignment 1</h1>
            <div className="grid grid-cols-3">
              <p className="font-bold">Due:</p>
              <p className="col-span-2">12.2.1</p>
              <p className="font-bold">Time:</p>
              <p className="col-span-2">16:00</p>
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          obcaecati error voluptatem temporibus cum iure. Accusantium possimus
          blanditiis voluptatum esse officiis? Excepturi veritatis expedita
          quisquam nihil tenetur quia ab error cum totam non aliquid placeat,
          cumque laudantium repudiandae blanditiis quis perspiciatis eos nemo
          optio repellat, atque consectetur iure! Soluta, nisi!
        </p>
      </section>
      <Card className="col-span-6">
        <CardHeader>
          <div className="flex justify-between">
            <h2 className="font-semibold">Submission details</h2>
            {isDelivered ? (
              <div className="flex gap-2 items-center">
                <CircleCheck />
                <p>Delivered</p>
              </div>
            ) : (
              <p>Not delivered</p>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <AssignmentForm fnAction={setIsDelivered} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Assignment;
