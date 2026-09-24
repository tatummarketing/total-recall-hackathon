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
  metadataBase: new URL("https://recall-tatum-walrus.vercel.app"),
  title: "Total Recall | Tatum x Walrus Memory Hackathon",
  description:
    "Get your memory back. Three tracks, $4,500 in prizes. Walrus Memory + Tatum. Web2 builders welcome.",
  alternates: { canonical: "https://tatum.io/total-recall" },
  openGraph: {
    url: "https://tatum.io/total-recall",
    title: "Total Recall | Tatum x Walrus Memory Hackathon",
    description:
      "Join the Walrus x Tatum Hackathon: Total Recall. $4,500 prize pool. 20 Oct to 10 Nov 2026. Online.",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Total Recall · Tatum x Walrus Memory Hackathon · $4,500 prize pool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Total Recall | Tatum x Walrus Memory Hackathon",
    description:
      "Join the Walrus x Tatum Hackathon: Total Recall. $4,500 prize pool. 20 Oct to 10 Nov 2026. Online.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${orbitron.variable} h-full antialiased`}>
      <body className="min-h-full font-sans text-foreground antialiased">
        {children}
        {/* Embedded on tatum.io/total-recall: keep outbound links from loading inside the frame */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(window.top!==window.self){document.addEventListener("click",function(e){var a=e.target.closest&&e.target.closest("a[href]");if(!a)return;var u=new URL(a.href,location.href);if(u.origin!==location.origin){a.target="_blank";a.rel="noopener noreferrer";}},true);}`,
          }}
        />
      </body>
    </html>
  );
}
