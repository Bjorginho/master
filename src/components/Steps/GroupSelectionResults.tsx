import { AdminOptions } from "@/app/admin/course/register/page";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import CreateForm from "../CreateForm/CreateForm";

const GroupSelectionResults = (props: { options: AdminOptions }) => {
  const { formBasedGroups, randomizedGroups, studentSelectedGroups } =
    props.options;

  return (
    <>
      <h1>You selected</h1>
      <div className="flex gap-4 justify-center font-semibold text-lg w-full">
        {formBasedGroups && <GroupBadge text="Form-Based" />}
        {randomizedGroups && <GroupBadge text="Randomized" />}
        {studentSelectedGroups && <GroupBadge text="Student-Selected" />}
      </div>
      {formBasedGroups && (
        <>
          <p className="text-lg">
            Since you have selected{" "}
            <span className="font-bold">Form-Based</span>, you have to fill a
            form that the students must complete before the groups are formed.
          </p>
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger>
                <Button>
                  <Plus />
                  Create form
                </Button>
              </DialogTrigger>
              <DialogContent>
                <CreateForm />
              </DialogContent>
            </Dialog>
            <Button variant="outline" disabled>
              Use existing form
            </Button>
          </div>
        </>
      )}
    </>
  );
};

const GroupBadge = (props: { text: string }) => {
  return <Badge variant="outline">{props.text}</Badge>;
};

export default GroupSelectionResults;
