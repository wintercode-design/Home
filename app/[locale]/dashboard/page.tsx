"use client"; // if using app router

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

type User = {
  role: string;
  [key: string]: any;
};

export default function AdminPage() {
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/api/auth/signin?callbackUrl=/dashboard");
  //   },
  // });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      {/* <p>{session?.user?.name}</p> */}
    </div>
  );
}
