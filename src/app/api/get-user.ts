import { auth } from "@/auth";
import prisma from "@/client";

export default async function GetUser() {
  const session = await auth();
  const sessionUser = session?.user;

  const prismaUser = await prisma.user.findUnique({
    where: { email: sessionUser?.email ?? undefined },
  });

  return { session, prisma, sessionUser, prismaUser };
}
