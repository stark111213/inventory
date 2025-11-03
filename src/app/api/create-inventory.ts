"use server";

import { PrismaClient } from "@/app/generated/prisma/client";
import { auth } from "@/auth";

export default async function CreateInventory() {
  const session = await auth();
  const prisma = new PrismaClient();
  const user = session?.user;

  const prismaUser = await prisma.user.findUnique({
    where: { email: user?.email ?? undefined },
  });

  const inventory = await prisma.inventory.create({
    data: {
      creator_id: prismaUser?.id ?? "",
      created_at: new Date().toISOString(),
      version: 0,
    },
  });

  return inventory?.id;
}
