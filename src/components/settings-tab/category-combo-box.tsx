"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Category } from "@/app/generated/prisma/enums";
import GetCurrentCategory from "@/app/api/get-current-category";
import { useParams } from "next/navigation";
import SetCategory from "@/app/api/set-category";

const categories = Object.keys(Category);

export function ComboBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [isPending, startTransition] = React.useTransition();
  const inventoryId = useParams<{ inventoryId: string }>();

  React.useEffect(() => {
    async function fetchCategory() {
      const category = await GetCurrentCategory(inventoryId.inventoryId);
      setValue(category.valueOf());
    }
    fetchCategory();
  }, [inventoryId]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value || "Select category..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." className="h-9" />{" "}
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category.valueOf()}
                  value={category.valueOf()}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    startTransition(() =>
                      SetCategory(currentValue, inventoryId.inventoryId)
                    );
                    setOpen(false);
                  }}
                >
                  {category.valueOf()}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === category.valueOf() ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
