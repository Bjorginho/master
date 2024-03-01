"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold text-center">
        Welcome, please select your role
      </h1>
      <div className="flex justify-center gap-4">
        <Button onClick={() => router.push("/student")}>I am a student</Button>
        <Button onClick={() => router.push("/admin")}>I am an admin</Button>
      </div>
    </div>
  );
};

export default Home;
