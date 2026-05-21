import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Playfair_Display, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "../styles/theme.css";
import "../styles/animations.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { IntroAnimationProvider } from "@/context/IntroAnimationContext";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScrollWrapper from "@/components/layout/SmoothScrollWrapper";
import SuppressThreeWarnings from "@/components/utils/SuppressThreeWarnings";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shriyakulkarni.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shriya Sandesh Kulkarni | Full Stack Developer",
    template: "%s | Shriya Sandesh Kulkarni"
  },
  description: "Shriya Sandesh Kulkarni is a Full Stack Developer from Pune, India, building web and mobile applications with React, Next.js, TypeScript, React Native, and Flutter. Explore projects like Festify and FocusFlow.",
  keywords: [
    "Shriya Sandesh Kulkarni",
    "Shriya Kulkarni portfolio",
    "Shriya Kulkarni developer",
    "Shriya Kulkarni Full Stack Developer",
    "Full Stack Developer Pune",
    "React Developer India",
    "Next.js Developer",
    "TypeScript Developer",
    "React Native Developer",
    "Flutter Developer",
    "Festify project",
    "FocusFlow app",
    "AISSMS IOIT",
    "Mobile App Developer",
    "Web Development Portfolio",
    "B.Tech IT Developer",
  ],
  authors: [{ name: "Shriya Sandesh Kulkarni", url: siteUrl }],
  creator: "Shriya Sandesh Kulkarni",
  publisher: "Shriya Sandesh Kulkarni",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  classification: "Portfolio",
  other: {
    author: "Shriya Sandesh Kulkarni",
    "geo.region": "IN-MH",
    "geo.placename": "Pune",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Shriya Sandesh Kulkarni Portfolio",
    title: "Shriya Sandesh Kulkarni | Full Stack Developer",
    description: "Shriya Sandesh Kulkarni builds full-stack web and mobile applications. Featured projects: Festify and FocusFlow.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Shriya Sandesh Kulkarni - Full Stack Developer Portfolio"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shriya Sandesh Kulkarni | Full Stack Developer",
    description: "Shriya Sandesh Kulkarni - Full Stack Developer. Featured work includes Festify and FocusFlow.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ibL2p6r9xrTKR3U9o5zRTmVlFC4lAP_GheMlBWgOuGo',
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shriya Sandesh Kulkarni",
    "url": siteUrl,
    "image": `${siteUrl}/images/profile/profile.jpg`,
    "jobTitle": "Full Stack Developer",
    "description": "Shriya Sandesh Kulkarni is a Full Stack Developer and B.Tech IT student at AISSMS IOIT, Pune, building web and mobile applications with React, Next.js, TypeScript, React Native, and Flutter.",
    "email": "shriya25.main@gmail.com",
    "telephone": "+91-8149591740",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://github.com/shriyakulkarni",
      "https://linkedin.com/in/shriyakulkarni"
    ],
    "knowsAbout": [
      "Full Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "React Native",
      "Flutter",
      "Mobile App Development",
      "Firebase",
      "MongoDB"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "AISSMS Institute of Information Technology, Pune"
    },
    "subjectOf": [
      {
        "@type": "CreativeWork",
        "name": "Festify",
        "description": "Full-stack college event management platform with integrated payment and role-based dashboards.",
      },
      {
        "@type": "CreativeWork",
        "name": "FocusFlow",
        "description": "Pomodoro productivity mobile application with persistent timer management and analytics.",
      }
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shriya Sandesh Kulkarni Portfolio",
    "url": siteUrl,
    "description": "Portfolio of Shriya Sandesh Kulkarni showcasing full-stack web and mobile projects, including Festify and FocusFlow.",
    "author": {
      "@type": "Person",
      "name": "Shriya Sandesh Kulkarni"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
  ];

  return (
    <html lang="en" className="dark">
      <head>
        <title>Shriya Sandesh Kulkarni | Full Stack Developer</title>
        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Structured Data - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        
        {/* Breadcrumb Schema */}
        <BreadcrumbSchema items={breadcrumbItems} />
        
        {/* Favicon - ICO format for maximum compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        
        {/* Bing/Microsoft specific meta tags */}
        <meta name="msapplication-TileColor" content="#0F0E0E" />
        <meta name="msapplication-TileImage" content="/android-chrome-512x512.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for faster resource loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Theme Color for mobile browsers */}
        <meta name="theme-color" content="#0F0E0E" />
        {/* Viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${playfairDisplay.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased`}
        style={{ overflow: 'visible' }}
      >
        <CustomCursor />
        <IntroAnimationProvider>
          <SuppressThreeWarnings />
          <SmoothScrollWrapper>
            <Navbar />
            <main className="relative z-10" style={{ overflow: 'visible' }}>
              {children}
            </main>
            <Footer />
          </SmoothScrollWrapper>
        </IntroAnimationProvider>
      </body>
    </html>
  );
}
