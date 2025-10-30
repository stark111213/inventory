import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function TypographyH1({ children, className }: TypographyProps) {
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

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-left text-2xl font-extrabold tracking-tight text-balance",
        className
      )}
    >
      {children}
    </h3>
  );
}
