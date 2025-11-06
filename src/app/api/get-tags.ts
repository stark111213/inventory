"use server";

import prisma from "@/client";

export default async function GetTags(inventoryId: string) {
  const inv = await prisma.inventory.findUnique({
    where: {
      id: inventoryId,
    },
  });

  return inv?.tags;
}
