import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/lib/i18n/routing";
import { notFound } from "next/navigation";
import Container from "@/components/base/Container";
import Navbar from "@/components/base/Navbar";
import Footer from "@/components/base/Footer";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/config/QueryClientConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wintercode Design studio",
  description: "Custome made software solutions",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // insure that the incoming locale is a valid locale
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return notFound();
  }
  return (
    <html lang={locale}>
      <body
        className={`${urbanist.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <NextIntlClientProvider>
            <Navbar local={locale} />
            {children}
            <Container stylebg="bg-[#1A202C]" className="min-h-[566px]">
              <Footer />
            </Container>
          </NextIntlClientProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
