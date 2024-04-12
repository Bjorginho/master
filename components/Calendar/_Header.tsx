import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import NewEventPopover from "../Popover/NewEventPopover";
import { Dialog, DialogTrigger } from "../ui/dialog";

type Props = {
  headerText: string;
  handleBackButton: () => void;
  handleNextButton: () => void;
};

const CalendarHeader = ({
  headerText,
  handleBackButton,
  handleNextButton,
}: Props) => {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
      <h1 className="font-semibold leading-6 text-foreground">
        {/* {renderHeaderText(view)} */}
        {headerText}
      </h1>
      <div className="flex items-center">
        <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
          <button
            type="button"
            onClick={handleBackButton}
            className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
          <button
            type="button"
            onClick={handleNextButton}
            className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
          >
            <span className="sr-only">Next month</span>
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:ml-4 md:flex md:items-center">
          <div className="ml-6 h-6 bg-gray-300" />
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add event</Button>
            </DialogTrigger>
            <NewEventPopover />
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default CalendarHeader;
