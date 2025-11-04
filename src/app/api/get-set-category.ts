"use server";

import { Category } from "../generated/prisma/enums";
import GetUser from "./get-user";

export default async function GetSetCategory({
  inventoryId,
  currentValue,
}: {
  inventoryId: string;
  currentValue: string;
}) {
  const { prisma } = await GetUser();
  await prisma.inventory.update({
    where: {
      id: inventoryId,
    },
    data: {
      category: currentValue as Category,
    },
  });
}
