"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SocialMediaIcon from "../Icon/SocialMediaIcon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Channel } from "@prisma/client";

const formSchema = z.object({
  url: z.string().url(),
});

type Schema = z.infer<typeof formSchema>;

const SocialMediaForm = ({ channel }: { channel: Channel }) => {
  const [editMode, setEditMode] = useState(false);
  const form = useForm<Schema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: channel.url,
    },
  });

  function onSubmit(values: Schema) {
    toast.success("Saved");
    setEditMode(!editMode);
  }

  return (
    <Form {...form}>
      <a href={channel.url} className="font-semibold text-lg flex  gap-2">
        <ExternalLink />
        <p>{channel.name}</p>
      </a>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2 items-end"
      >
        <div>
          <SocialMediaIcon channel={channel} />
        </div>
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link</FormLabel>
              <FormControl>
                <Input disabled={!editMode} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="button"
          variant={"outline"}
          onClick={() => setEditMode(!editMode)}
        >
          edit
        </Button>
        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
};

export default SocialMediaForm;
