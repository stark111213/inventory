import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Sign In",
  icons: {
    icon: "/gallery-vertical-end.svg",
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body> {children}</body>
    </html>
  );
}
