import { useSession } from "next-auth/react";

export default function PassUser() {
  const { data: session } = useSession();
  const s = session?.user;

  return {
    name: s?.name ?? "",
    email: s?.email ?? "",
    avatar: s?.image ?? "",
  };
}
