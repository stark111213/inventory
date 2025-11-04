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
import GetSetCategory from "@/app/api/get-set-category";

const categories = Object.keys(Category);

export function ComboBox({ inventoryId }: { inventoryId: string }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  async function UpdateCategory({
    currentValue,
    inventoryId,
  }: {
    currentValue: string;
    inventoryId: string;
  }) {
    GetSetCategory({ currentValue, inventoryId });
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? categories.find((category) => category.valueOf())
            : "Select category..."}
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
                    UpdateCategory({ inventoryId, currentValue });
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
