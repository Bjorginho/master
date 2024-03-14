import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const NotificationDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size={"icon"} variant={"destructive"} className="rounded-full">
          <p className="text-lg">4</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <h2 className="font-bold">4 notifications</h2>
        <ul className="flex flex-col gap-4">
          <li>
            <p>Proposed changes from Per</p>
          </li>
          <li>
            <p>Missing signature from Jenny</p>
          </li>
          <li>
            <p>Missing signature from Terje</p>
          </li>
        </ul>

        <DialogFooter>
          <DialogClose>
            <Button variant={"outline"}>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationDialog;
