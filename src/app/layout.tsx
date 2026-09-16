import type { Metadata } from "next";
import { Orbitron, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Total Recall | Tatum x Walrus Memory Hackathon",
  description:
    "Get your memory back. Three tracks, $4,000 in prizes. Walrus Memory + Tatum. Web2 builders welcome.",
  openGraph: {
    title: "Total Recall | Tatum x Walrus Memory Hackathon",
    description:
      "Build apps that learn over time. 13 Oct to 3 Nov 2026. 1st $500, 2nd $300, 3rd $200 per track.",
    images: ["/assets/walrus/walrus-memory-social-preview.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${orbitron.variable} h-full antialiased`}>
      <body className="min-h-full font-sans text-foreground antialiased">{children}</body>
    </html>
  );
}
