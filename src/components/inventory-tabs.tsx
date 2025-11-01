import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomIDTab from "./custom-id-tab";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { DropdownMenu } from "./ui/dropdown-menu";
import { ComboBox } from "./combo-box";

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
      <CustomIDTab />
      <TabsContent value="settings" className="w-md mt-5">
        <div className="flex gap-3">
          <span className="mt-1">Title</span>
          <Input />
        </div>
        <div className="flex gap-3 mt-5">
          <span className="mt-1">Description</span>
          <Textarea placeholder="Type your message here." />
        </div>
        <div className="flex gap-3 mt-5">
          <span className="mt-1">Category</span>
          <ComboBox />
        </div>
        <div className="flex gap-3 mt-5">
          <span className="mt-1">Tags</span>
          <Textarea placeholder="Type your tags here." />
        </div>
      </TabsContent>
    </Tabs>
  );
}
