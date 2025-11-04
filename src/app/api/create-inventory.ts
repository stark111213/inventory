"use server";
import GetUser from "./get-user";

export default async function CreateInventory() {
  const { prisma, prismaUser } = await GetUser();

  const inventory = await prisma.inventory.create({
    data: {
      creator_id: prismaUser?.id ?? "",
      created_at: new Date().toISOString(),
      version: 0,
    },
  });

  return inventory?.id;
}
