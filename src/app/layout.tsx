import { ThemeProvider } from "@/components/providers/theme-provider";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { type Metadata } from "next";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Holonexus",
  description:
    "The SWGOH Holonet Nexus, providing in-depth analysis on guild member activity.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = Montserrat({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={font.className}>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
