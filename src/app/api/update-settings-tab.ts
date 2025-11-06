"use server";

import prisma from "@/client";

export default async function updateSettingsTab(
  inventoryId: string,
  formdata: FormData
) {
  const title = formdata.get("title") as string;
  const description = formdata.get("description") as string;

  const inv = await prisma.inventory.findUnique({
    where: {
      id: inventoryId,
    },
  });

  if (inv?.title !== title) {
    await prisma.inventory.update({
      where: {
        id: inventoryId,
      },
      data: {
        title: title,
      },
    });
  }

  if (inv?.description !== description) {
    await prisma.inventory.update({
      where: {
        id: inventoryId,
      },
      data: {
        description: description,
      },
    });
  }
}
