/**
 * Auto-generated JSDoc for layout.tsx
 * This helps maintain code documentation standards.
 */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/MainNav";
import { NetworkBanner } from "@/components/NetworkBanner";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stacks Quest | Learn Bitcoin & Build on Stacks",
  description: "Master Bitcoin and Stacks through interactive quests and challenges. Anchored to Truth.",
  keywords: ["Stacks", "Bitcoin", "Clarity", "Smart Contracts", "Web3", "Learning"],
  other: {
    "talentapp:project_verification": "21ce105ebab2867d2e9d8df3ef130d444205cdbe8180f78f9e7ef2a45809e98dfd82287bb0fb2a8751b1adccf15b3bb53711b1bf0fec7e39317f866e45564538"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <MainNav />
            <NetworkBanner />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
