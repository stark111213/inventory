"use server";

import prisma from "@/client";

export default async function GetInventory(inventoryId: string) {
  return prisma.inventory.findUnique({
    where: {
      id: inventoryId,
    },
  });
}
