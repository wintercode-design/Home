import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import Container from "@/components/base/Container";
import Navbar from "@/components/base/Navbar";
import Footer from "@/components/base/Footer";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/config/QueryClientConfig";
import QueryProvider from "@/providers/queryProvider";
import ToastNotif from "@/components/base/toastNotif";
import { getLocale } from "next-intl/server";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale}>
      <body
        className={`${urbanist.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <ToastNotif>
            <QueryClientProvider client={queryClient}>
              <NextIntlClientProvider>
                <Navbar local={locale} />
                {children}
                <Container stylebg="bg-[#1A202C]" className="min-h-[566px]">
                  <Footer />
                </Container>
              </NextIntlClientProvider>
            </QueryClientProvider>
          </ToastNotif>
        </QueryProvider>
      </body>
    </html>
  );
}
