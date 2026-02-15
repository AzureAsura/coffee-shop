import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
export const metadata: Metadata = {

  metadataBase: new URL("https://twenty-one-coffee.vercel.app"),
  
  title: "Twenty One Coffee & Eatery Bali | Sajian Kuliner & Kopi Terbaik di Denpasar",
  description:
    "Temukan harmoni rasa antara kopi pilihan dan hidangan kuliner favorit di Twenty One Coffee & Eatery Bali. Tempat nongkrong nyaman dengan suasana tenang di Denpasar.",
  keywords: [
    "Twenty One Coffee Bali",
    "Cafe Denpasar Bali",
    "Tempat makan enak di Denpasar",
    "Coffee shop minimalis Bali",
    "Best eatery Denpasar",
    "Twenty One Bali"
  ],
  openGraph: {
    title: "Twenty One Coffee & Eatery | Authentic Taste in Bali",
    description: "Sajian kuliner lokal dan western terbaik di jantung kota Denpasar.",
    url: "https://twenty-one-coffee.vercel.app/",
    siteName: "Twenty One Coffee & Eatery",
    images: [
      {
        url: "logo.jpg",
        width: 1200,
        height: 630,
        alt: "Twenty One Coffee & Eatery Bali",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
          className={`${poppins.className} ${inter.className} antialiased`}
        >
          <Navbar />
          {children}
        </body>
    </html>
  );
}
