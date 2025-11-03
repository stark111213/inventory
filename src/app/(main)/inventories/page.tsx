"use client";

import CreateInventory from "@/app/api/create-inventory";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Inventories() {
  return (
    <div className="mt-15 flex justify-center">
      <Button
        onClick={async () => {
          const inventoryId = await CreateInventory();
          redirect(`/inventories/${inventoryId}`);
        }}
        className="bg-accent-main hover:bg-accent-light"
      >
        Create an Inventory
      </Button>
    </div>
  );
}
