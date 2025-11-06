"use server";

import prisma from "@/client";

export default async function GetCurrentCategory(inventoryId: string) {
  const inv = await prisma.inventory.findUnique({
    where: {
      id: inventoryId,
    },
    select: {
      category: true,
    },
  });

  return inv?.category ?? "";
}
