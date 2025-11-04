import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomIDTab from "./custom-id-tab";
import SettingsTab from "./settings-tab";

export default function InventoryTabs() {
  return (
    <Tabs defaultValue="items">
      <TabsList className="w-full mb-2 bg-main-light dark:bg-main-dark">
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
      <SettingsTab />
    </Tabs>
  );
}
