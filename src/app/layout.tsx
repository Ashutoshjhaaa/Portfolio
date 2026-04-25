import type { Metadata } from "next";
import { Inter, Outfit, Bricolage_Grotesque } from 'next/font/google';
import "./globals.css";
import { Background } from "@/components/layout/Background";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

import { portfolioData } from "@/components/constants/data";

export const metadata: Metadata = {
  title: portfolioData.metadata.title,
  description: portfolioData.metadata.description,
  keywords: portfolioData.metadata.keywords,
  authors: [{ name: portfolioData.metadata.author }],
  creator: portfolioData.metadata.author,
  publisher: portfolioData.metadata.siteName,
  robots: "index, follow",
  openGraph: {
    title: portfolioData.metadata.title,
    description: portfolioData.role,
    url: portfolioData.metadata.url,
    siteName: portfolioData.metadata.siteName,
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.metadata.title,
    description: portfolioData.role,
  },
};


import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${bricolage.variable} font-sans`} suppressHydrationWarning>
      <body className="antialiased selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 bg-background text-foreground font-sans">
        <ThemeProvider>
          <Background />
          <ScrollToTop />
          <div className="max-w-[1440px] mx-auto min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

