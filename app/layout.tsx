import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "R3F Tutorial",
  description: "Basic tutorial about react-three-fiber. 2025 © Ramy Chu",
  authors: [{ name: "Ramy Chu", url: "https://github.com/raamiiChu" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSans.variable} ${notoSans.className} mx-auto overflow-x-hidden antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <main className="relative w-full pb-8">
              <SidebarTrigger className="sticky top-0 z-50 border-2 border-accent bg-background md:border-0" />
              <article className="container mx-auto px-4 md:px-12 lg:px-24 xl:px-40 2xl:px-64">
                {children}
              </article>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
