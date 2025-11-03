import { PrismaClient } from "@/app/generated/prisma/client";
import { User } from "next-auth";

const prisma = new PrismaClient();

export default async function CreateUser(user: User) {
  if (!user?.email) return;

  await prisma.user.upsert({
    where: { email: user.email },
    update: {},
    create: {
      name: user.name ?? "",
      email: user.email,
    },
  });
}
