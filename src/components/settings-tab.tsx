import { ComboBox } from "./combo-box";
import { Input } from "./ui/input";
import { TabsContent } from "./ui/tabs";
import { Textarea } from "./ui/textarea";

export default function SettingsTab() {
  return (
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
  );
}
