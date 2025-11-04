import { Input } from "./ui/input";
import { ComboBox } from "./category-combo-box";
import { Button } from "./ui/button";
import { TabsContent } from "./ui/tabs";

export default function CustomIDTab() {
  return (
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

      {/* <div className="mt-5 flex w-xl gap-3">
        <ComboBox />
        <Input />
      </div>
      <p className="text-gray-400 text-sm">
        A piece of unchanging text - you can use Unicode emoji.
      </p> */}

      <Button className="mt-3 w-fit bg-white border border-accent-main text-accent-main hover:bg-main-light">
        Add element
      </Button>
    </TabsContent>
  );
}
