import { NewEventForm } from "@/components/Popover/NewEventPopover";
import { prisma } from "@/prisma/prisma";

export async function POST(req: Request) {
  const body: NewEventForm = await req.json();

  const event = await prisma.event.create({
    data: {
      name: body.title,
      startDate: new Date(body.startDate),
      description: body.description,
      endDate: new Date(body.endDate),
      location: "Somewhere",
    },
  });

  return Response.json(event);
}
