"use client";

import { useParams } from "next/navigation";
import { ComboBox } from "./category-combo-box";
import { TabsContent } from "../ui/tabs";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import updateSettingsTab from "@/app/api/update-settings-tab";
import { Badge } from "../ui/badge";
import { Plus } from "lucide-react";
import GetTags from "@/app/api/get-tags";
import { useEffect, useState } from "react";
import GetInventory from "@/app/api/get-title-description";

export default function SettingsTab() {
  const inventoryId = useParams<{ inventoryId: string }>();

  const [tags, setTags] = useState<string[] | undefined>(undefined);
  const [title, setTitle] = useState<string | null | undefined>(undefined);
  const [description, setDescription] = useState<string | null | undefined>(
    undefined
  );

  useEffect(() => {
    async function getData() {
      const inv = await GetInventory(inventoryId.inventoryId);
      setTitle(inv?.title);
      setDescription(inv?.description);
    }
    getData();
  }, [inventoryId.inventoryId]);

  useEffect(() => {
    async function getTags() {
      const t = await GetTags(inventoryId.inventoryId);
      setTags(t);
    }
    getTags();
  }, [inventoryId.inventoryId]);

  return (
    <TabsContent value="settings" className="w-xl mt-5">
      <form
        className="flex flex-col gap-5"
        action={updateSettingsTab.bind(null, inventoryId.inventoryId)}
      >
        <Label>
          Title
          <Input name="title" className="ml-16" defaultValue={title ?? ""} />
        </Label>

        <Label>
          Description
          <Textarea
            name="description"
            placeholder="Type your description here."
            className="ml-5"
            defaultValue={description ?? ""}
          />
        </Label>

        <Label>
          Category
          <div className="ml-9">
            <ComboBox />
          </div>
        </Label>

        <div className="flex gap-2 flex-wrap">
          <Label>Tags</Label>

          {tags?.map((tag, index) => {
            return (
              <Badge
                key={index}
                className="bg-accent-main/10 hover:bg-accent-main/15 dark:hover:bg-accent-main/30 text-accent-main h-5 mt-2 hover:cursor-pointer"
              >
                {tag}
              </Badge>
            );
          })}

          <Button className="rounded-full">
            <Plus />
          </Button>
        </div>

        <Button type="submit" className="w-fit">
          Save changes
        </Button>
      </form>
    </TabsContent>
  );
}
