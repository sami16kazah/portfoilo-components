import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/util";
import localFont from "next/font/local";
import GrainEFfect from "@/components/visualEffects/grainEffect";
import { Cursor } from "@/components/cursor/Cursor";

const inter = Inter({ subsets: ["latin"] });
const MainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const OswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const PixelFont = localFont({
  src: "../public/assets/fonts/pixel-font-7.ttf",
  variable:"--font-pixel)",
});

export const metadata: Metadata = {
  title: "Sami Kazah",
  description: "Sami Kazah Official portfoilo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(MainFont.className, OswaldFont.variable,PixelFont.variable)}>
        <GrainEFfect></GrainEFfect>
        <Cursor color="white"></Cursor>
        {children}
      </body>
    </html>
  );
}
