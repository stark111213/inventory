import GetInventory from "@/app/api/get-title-description";
import InventoryTabs from "@/components/inventory-tabs";
import { TypographyH1 } from "@/components/typography";
import { Badge } from "@/components/ui/badge";

export default async function Inventory(params: {
  params: { inventoryId: string };
}) {
  const inventoryId = params.params.inventoryId;
  const inv = await GetInventory(inventoryId);

  return (
    <div className="flex flex-col">
      <div className="flex items-end gap-5 mb-10">
        <TypographyH1>{inv?.title}</TypographyH1>
        <Badge className="bg-emerald-100 text-green-800">
          All changes saved
        </Badge>
      </div>
      <InventoryTabs />
    </div>
  );
}
