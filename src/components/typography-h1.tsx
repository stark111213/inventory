import { cn } from "@/lib/utils";

export function TypographyH1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance -mt-10",
        className
      )}
    >
      {children}
    </h1>
  );
}
