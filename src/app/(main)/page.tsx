import { DataTableDemo } from "@/components/table-demo";
import TagCloud from "@/components/tag-cloud";
import { TypographyH1, TypographyH3 } from "@/components/typography";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex flex-3 flex-col w-2xl">
        <TypographyH1 className="">Dashboard</TypographyH1>
        <TypographyH3 className="mt-12">Latest</TypographyH3>
        <DataTableDemo />

        <TypographyH3 className="mt-12">Top 5 by # of Items</TypographyH3>
        <DataTableDemo />
      </div>
      <TagCloud />
    </div>
  );
}
