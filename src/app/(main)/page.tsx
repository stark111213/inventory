import { DataTableDemo } from "@/components/table-demo";
import TagCloudContainer from "@/components/tag-cloud";
import TagCloud from "@/components/tag-cloud";
import { TypographyH1, TypographyH3 } from "@/components/typography";

export default async function Home() {
  return (
    <div className="flex dark:bg-main-dark-theme">
      <div className="flex flex-3 flex-col w-2xl">
        <TypographyH1 className="">Dashboard</TypographyH1>
        <TypographyH3 className="mt-12">Latest</TypographyH3>
        <DataTableDemo />

        <TypographyH3 className="mt-12">Top 5 by # of Items</TypographyH3>
        <DataTableDemo />
      </div>
      <TagCloudContainer />
    </div>
  );
}
