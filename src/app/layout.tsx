import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SideNavigation from "@/app/components/sidenav";

const poppins = Poppins({
  style: "normal",
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"]
});

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
      <body className={poppins.className}>
        <div className="min-h-screen flex">

          <SideNavigation />
          {children}

        </div>
      </body>
    </html>
  );
}
