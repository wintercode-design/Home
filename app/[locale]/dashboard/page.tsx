import { options } from "@/app/api/auth/[...nextauth]/auth";
import { getServerSession } from "next-auth";

type User = {
  role: string;
  [key: string]: any;
};

export default async function AdminPage() {
  const session = await getServerSession(options);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>{session?.user?.name}</p>
    </div>
  );
}
