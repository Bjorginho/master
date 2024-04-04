"use client";

import NewChannelForm from "@/components/Form/NewChannelForm";
import SocialMediaForm from "@/components/Form/SocialMediaForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePageHeader } from "@/context/PageHeaderContext";
import { useStudentData } from "@/context/StudentContext";
import { Plus } from "lucide-react";
import { useEffect } from "react";

const Channels = () => {
  const { setHeaderText } = usePageHeader();
  const data = useStudentData();
  const channels = data.groupData.links;

  if (!channels) return <p>no channels</p>;

  useEffect(() => {
    setHeaderText("Channels");
  }, []);

  return (
    <div className="flex flex-col gap-4 space-y-8">
      <section className="flex justify-between gap-2">
        <p>This is where you manage all your channels within your group</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus />
              <p>New channel</p>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add new channel link</DialogTitle>
              <DialogDescription>
                Add a new channel link to your group
              </DialogDescription>
            </DialogHeader>
            <NewChannelForm />
          </DialogContent>
        </Dialog>
      </section>
      <hr />
      <section className="grid grid-cols-12 gap-6">
        {channels.map((channel, index) => (
          <section key={index} className="col-span-4 gap-2">
            <SocialMediaForm channel={channel} />
          </section>
        ))}
      </section>
      <hr />
    </div>
  );
};

export default Channels;
