"use client";

import GroupContract from "@/components/Contract/Contract";
import NotificationDialog from "@/components/Dialog/NotificationDialog";
import ContractRevisionForm from "@/components/Form/ContractRevision/ContractRevisionForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { fetchGroupContract } from "@/services/fetch";
import { GroupContract as Contract } from "@prisma/client";
import { format, parseISO } from "date-fns";
import { UserRound } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ContractPage() {
  const searchParams = useSearchParams();
  const [contract, setContract] = useState<Contract | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const groupId = searchParams.get("groupId");
      if (!groupId) return;
      const contract: Contract = await fetchGroupContract(groupId);
      setContract(contract);
    };

    if (!contract) {
      fetchData();
    }
  }, [contract, searchParams]);

  return (
    <div>
      <Card>
        <CardHeader className="flex-row justify-between items-center">
          <NotificationDialog />
          <p>
            Your status: <span className="font-semibold">Signed</span>
          </p>
          <Dialog>
            <DialogTrigger>
              <Button variant={"outline"}>propose changes</Button>
            </DialogTrigger>
            <DialogContent>
              <ContractRevisionForm />
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {contract && <GroupContract contract={contract} />}
        </CardContent>
        <CardFooter className="justify-between items-start px-16">
          <div>
            <h2 className="font-bold text-center">Signed</h2>
            <div className="flex justify-center gap-8">
              <UserAvatar firstName="Kaja" signedDate={new Date()} />
              <UserAvatar firstName="Per" signedDate={new Date()} />
              <UserAvatar firstName="Anna" signedDate={new Date()} />
              <UserAvatar firstName="Ola" signedDate={new Date()} />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-center">Not signed</h2>
            <div className="flex justify-center gap-8">
              <UserAvatar firstName="Jenny" />
              <UserAvatar firstName="Terje" />
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

const formatDate = (date: Date) => {
  return format(parseISO(date.toISOString()), "MMM. dd ");
};

const UserAvatar = (props: { firstName: string; signedDate?: Date }) => {
  const date = props.signedDate ? formatDate(props.signedDate) : null;
  return (
    <div className="flex flex-col items-center">
      <UserRound className="w-14 h-14" />
      <p>{props.firstName}</p>
      {date && <p className="text-xs inline-block">{date}</p>}
    </div>
  );
};
