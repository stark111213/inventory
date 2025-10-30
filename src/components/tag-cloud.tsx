"use client";

import { TypographyH3 } from "./typography";
import { ScrollArea } from "./ui/scroll-area";
import { TagCloud } from "react-tagcloud";

const data = [
  { value: "JavaScript", count: 38 },
  { value: "React", count: 30 },
  { value: "Nodejs", count: 28 },
  { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 },
  { value: "MongoDB", count: 18 },
  { value: "CSS3", count: 20 },
];

export default function TagCloudContainer() {
  return (
    <div className="flex-2 w-full ml-10 flex flex-col mt-12">
      <TypographyH3 className="w-full text-center mb-3">#tags</TypographyH3>
      <ScrollArea className="max-h-100 rounded-2xl border p-2">
        <TagCloud
          className="flex justify-center flex-wrap"
          minSize={12}
          maxSize={35}
          tags={data}
          onClick={(tag) => alert(`'${tag.value}' was selected!`)}
        />
      </ScrollArea>
    </div>
  );
}
