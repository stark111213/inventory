import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "./ui/input";
import { ComboBox } from "./combo-box";
import { Button } from "./ui/button";

export default function InventoryTabs() {
  return (
    <Tabs defaultValue="items">
      <TabsList className="w-full mb-2 bg-main-light">
        <TabsTrigger value="items">Items</TabsTrigger>
        <TabsTrigger value="chat">Chat</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="customID">Custom ID</TabsTrigger>
        <TabsTrigger value="fields">Fields</TabsTrigger>
        <TabsTrigger value="access">Access</TabsTrigger>
        <TabsTrigger value="stats">Stats</TabsTrigger>
        <TabsTrigger value="export">Export</TabsTrigger>
      </TabsList>

      <TabsContent value="items">Make changes to your items.</TabsContent>
      <TabsContent value="customID">
        <p className="text-gray-500 text-sm">
          You can set up items with inventory numbers in your preferred format.
        </p>
        <p className="text-gray-500 text-sm">
          To create a format, add new elements, edit them, drag to reorder, or
          drag elements out of the form to delete them.
        </p>
        <div className="flex mt-3">
          <span className="text-gray-500 text-2xl mr-2">Exmaple:</span>
          <h4 className="text-2xl font-semibold">&#x1F4DA;-A7E3A-013_2025</h4>
        </div>

        <div className="mt-5 flex w-xl gap-3">
          <ComboBox />
          <Input />
        </div>
        <p className="text-gray-400 text-sm">
          A piece of unchanging text - you can use Unicode emoji.
        </p>
        <div className="mt-5 flex w-xl gap-3">
          <ComboBox />
          <Input />
        </div>
        <p className="text-gray-400 text-sm">
          A random value - you can format it as a six-digit decimal (D6) or
          5-digit hex (X5).
        </p>
        <div className="mt-5 flex w-xl gap-3">
          <ComboBox />
          <Input />
        </div>
        <p className="text-gray-400 text-sm">
          A sequential index - you can format it with leading zeros (D4) or
          without them (D).
        </p>
        <div className="mt-5 flex w-xl gap-3">
          <ComboBox />
          <Input />
        </div>
        <p className="text-gray-400 text-sm">
          An item creation date and time - you can use an abbreviated day of the
          week (ddd).
        </p>
        <Button className="mt-3 w-fit bg-white border border-accent-main text-accent-main hover:bg-main-light">
          Add element
        </Button>
      </TabsContent>
    </Tabs>
  );
}
