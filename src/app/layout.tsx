import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNavigation from "@/components/sidenav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  authors: {
    name: "Daniel Githiomi",
    url: "http://www.github.com/danielgithiomi",
  },
  title: "Tools and Equipment Management",
  description: "This is a dashboard to manage tools and equipment",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light-mode">
      <body className={inter.className}>
        <div className="min-h-screen flex">

          <SideNavigation />
          {children}

        </div>
      </body>
    </html>
  );
}
