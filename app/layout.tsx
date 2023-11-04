import type { Metadata } from "next";
import "./globals.css";
import { RelayProvider } from "@/app/RelayProvider";

export const metadata: Metadata = {
  title: "Relay Entrypoints",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="p-10">
        <RelayProvider>{children}</RelayProvider>
      </body>
    </html>
  );
}
