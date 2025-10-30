import InventoryTabs from "@/components/inventory-tabs";
import { TypographyH1 } from "@/components/typography";
import { Badge } from "@/components/ui/badge";

export default function Inventory() {
  return (
    <div className="flex flex-col">
      <div className="flex items-end gap-5 mb-10">
        <TypographyH1>New Inventory 1</TypographyH1>
        <Badge className="bg-emerald-100 text-green-800">
          All changes saved
        </Badge>
      </div>
      <InventoryTabs />
    </div>
  );
}
