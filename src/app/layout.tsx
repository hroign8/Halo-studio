import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

// ─── Analytics IDs (set in .env.local) ─────────────────
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID ?? "";
// ────────────────────────────────────────────────────────

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Halo Studio — Revenue, engineered.",
  description:
    "A performance studio that turns ad spend into measurable revenue — for Ugandan businesses ready to grow.",
  metadataBase: new URL("https://halostudio.co"),
  openGraph: {
    title: "Halo Studio — Revenue, engineered.",
    description:
      "A performance studio that turns ad spend into measurable revenue — for Ugandan businesses ready to grow.",
    url: "https://halostudio.co",
    siteName: "Halo Studio",
    locale: "en_UG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halo Studio — Revenue, engineered.",
    description:
      "A performance studio that turns ad spend into measurable revenue — for Ugandan businesses ready to grow.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
        <WhatsAppButton />

        {/* ── JSON-LD LocalBusiness schema ─────────────── */}
        <Script id="json-ld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Halo Studio",
            description: "A performance marketing studio in Kampala, Uganda. Google Ads, Meta Ads, and web development for Ugandan businesses.",
            url: "https://halostudio.co",
            telephone: "+256703824370",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kampala",
              addressCountry: "UG",
            },
            sameAs: ["https://instagram.com/halostudio.co"],
          })}
        </Script>

        {/* ── Google Analytics 4 ────────────────────────── */}
        {GA_ID && GA_ID !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}

        {/* ── Meta Pixel ───────────────────────────────── */}
        {PIXEL_ID && PIXEL_ID !== "XXXXXXXXXXXXXXX" && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
