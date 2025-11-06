"use server";

import prisma from "@/client";
import { Category } from "../generated/prisma/client";

export default async function SetCategory(
  category: string,
  inventoryId: string
) {
  await prisma.inventory.update({
    where: {
      id: inventoryId,
    },
    data: {
      category: category as Category,
    },
  });
}
