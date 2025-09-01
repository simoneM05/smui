import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

// import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/_ui/themeProvider";
import Navbar from "@/components/_ui/NavbarDesktop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "smui",
  description: "library of component in react ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="antialiased ">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div data-vaul-drawer-wrapper>
            <Navbar />
            <div className="m-10">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
