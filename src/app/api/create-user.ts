import prisma from "@/client";
import { User } from "next-auth";

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
