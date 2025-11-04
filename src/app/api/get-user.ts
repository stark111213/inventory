import { PrismaClient } from "@/app/generated/prisma/client";
import { auth } from "@/auth";

export default async function GetUser() {
  const session = await auth();
  const prisma = new PrismaClient();
  const sessionUser = session?.user;

  const prismaUser = await prisma.user.findUnique({
    where: { email: sessionUser?.email ?? undefined },
  });

  return { session, prisma, sessionUser, prismaUser };
}
