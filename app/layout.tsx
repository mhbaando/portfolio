import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav";

const poppins = Poppins({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Mohamud Abshir | Portfolio",
  description: "Mohamud Abshir Portfolio | mhbaando",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen antialiased grainy bg-black",
          poppins.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
