import { Fragment, useContext, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "../ui/button";
import { CalendarContext, View } from "@/context/Calendar";

import { toast } from "sonner";
import { cn } from "@/lib/utils";

// function classNames(...classes: (string | boolean | undefined)[]) {
//   return classes.filter(Boolean).join(' ');
// }

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
  const { view, setView } = useContext(CalendarContext);

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
          {/* <button
            type='button'
            className='hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block'
          >
            xxx
          </button> */}
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
          <Menu as="div" className="relative">
            <Menu.Button
              type="button"
              className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Month view
              <ChevronDown
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <ViewButton view={"day"} />
                  <ViewButton view={"week"} />
                  <ViewButton view={"month"} />
                  <ViewButton view={"year"} />
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <div className="ml-6 h-6 bg-gray-300" />
          <Button
            onClick={() =>
              toast("Event has been created", {
                description: "[vi må legge til tekst her]",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            Add event
          </Button>
        </div>
        <Menu as="div" className="relative ml-6 md:hidden">
          <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <MenuButton text="Create event" />
              </div>
              <div className="py-1">
                <MenuButton text="Go to today" />
              </div>
              <div className="py-1">
                <ViewButton view={"day"} />
                <ViewButton view={"week"} />
                <ViewButton view={"month"} />
                <ViewButton view={"year"} />
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
};

const ViewButton = ({ view }: { view: View }) => {
  const { setView } = useContext(CalendarContext);

  return (
    <Menu.Item>
      {({ active }) => (
        <a
          onClick={() => setView(view)}
          href="#"
          // aria-disabled='true'
          className={cn(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm"
          )}
        >
          {view}
        </a>
      )}
    </Menu.Item>
  );
};

const MenuButton = ({ text }: { text: string }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          // onClick={() => setView(view)}
          href="#"
          // aria-disabled='true'
          className={cn(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm"
          )}
        >
          {text}
        </a>
      )}
    </Menu.Item>
  );
};

export default CalendarHeader;
