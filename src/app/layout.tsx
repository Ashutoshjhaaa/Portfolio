import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "@/components/ui/smooth-scroll";
import ScrollToTop from "@/components/ui/scroll-to-top";
import SiteBackground from "@/components/ui/site-background";
import LiquidGlassSystem from "@/components/ui/liquid-glass-system";
import { BASE_URL, SOCIAL_LINKS, ABOUT_ME } from "./constants/data";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Ashutosh Jha",
    template: "%s | Ashutosh Jha",
  },
  description:
    "Ashutosh Jha portfolio showcasing full-stack development projects and skills in React, Next.js, TypeScript, Node.js, and more. Based in India. Available for freelance and full-time opportunities.",
  keywords: [
    "Ashutosh Jha",
    "ashutosh jha dev",
    "ashutosh jha tech",
    "ashutosh jha portfolio",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "Node.js",
    "New Delhi",
    "India",
  ],
  authors: [{ name: "Ashutosh Jha" }],
  creator: "Ashutosh Jha",
  publisher: "Ashutosh Jha",
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Ashutosh Jha",
    description:
      "Ashutosh Jha's personal portfolio showcasing full-stack development skills, projects, and professional experience.",
    siteName: "Ashutosh Jha",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ashutosh Jha - Portfolio Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashutosh Jha",
    description:
      "Ashutosh Jha's personal portfolio showcasing full-stack development skills, projects, and professional experience.",
    creator: "@ashutoshjhaaa",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={bricolage.variable}
      suppressHydrationWarning
      style={{ colorScheme: "dark light" }}
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />

        {/* Font Preloading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* External Resources Preconnect */}
        <link rel="preconnect" href="https://skillicons.dev" />
        <link rel="dns-prefetch" href="https://skillicons.dev" />
        <link
          rel="preconnect"
          href="https://github-contributions-api.jogruber.de"
        />
        <link rel="preconnect" href="https://app.cal.com" />

        {/* JSON-LD structured data for SEO */}
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: ABOUT_ME.name,
                url: BASE_URL,
                jobTitle: ABOUT_ME.title,
                description:
                  "Subhash Jha is a Full Stack Developer specializing in AI web integrations, high-performance dashboards, and modern web architectures using Next.js and TypeScript.",
                image: `${BASE_URL}${ABOUT_ME.profileImage}`,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "New Delhi",
                  addressRegion: "Delhi",
                  addressCountry: "IN",
                },
                alumniOf: [
                  {
                    "@type": "CollegeOrUniversity",
                    name: "Maharshi Dayanand University",
                    sameAs: "https://mdu.ac.in/",
                  },
                ],
                knowsAbout: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "Node.js",
                  "AI/ML Integration",
                  "Full Stack Development",
                  "Web Development",
                  "Tailwind CSS",
                ],
                sameAs: [
                  SOCIAL_LINKS.github,
                  SOCIAL_LINKS.linkedin,
                  SOCIAL_LINKS.twitter,
                  SOCIAL_LINKS.instagram,
                  SOCIAL_LINKS.blog,
                  SOCIAL_LINKS.peerlist,
                ],
                worksFor: [
                  {
                    "@type": "Organization",
                    name: "Bannerss Studio",
                    sameAs: "https://bannerss.studio/",
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Subhash Jha",
                url: BASE_URL,
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${bricolage.className} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <LiquidGlassSystem />
          <SiteBackground />
          <ScrollToTop />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
