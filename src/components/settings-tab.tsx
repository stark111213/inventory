"use client";

import { useParams } from "next/navigation";
import { ComboBox } from "./category-combo-box";
import { Input } from "./ui/input";
import { TabsContent } from "./ui/tabs";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import TitleInput from "./title-input";

export default function SettingsTab() {
  const inventoryId = useParams<{ inventoryId: string }>();
  return (
    <TabsContent value="settings" className="w-md mt-5">
      <div className="flex gap-3">
        <span className="mt-1">Title</span>
        <TitleInput />
      </div>
      <div className="flex gap-3 mt-5">
        <span className="mt-1">Description</span>
        <Textarea placeholder="Type your message here." />
      </div>
      <div className="flex gap-3 mt-5">
        <span className="mt-1">Category</span>
        <ComboBox inventoryId={inventoryId.inventoryId} />
      </div>
      <div className="flex gap-3 mt-5">
        <span className="mt-1">Tags</span>
        <Button>Add tag</Button>
      </div>
    </TabsContent>
  );
}
