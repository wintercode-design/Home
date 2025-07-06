import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";
import Container from "@/components/base/Container";
import Navbar from "@/components/base/Navbar";
import Footer from "@/components/base/Footer";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/config/QueryClientConfig";
import QueryProvider from "@/providers/queryProvider";
import ToastNotif from "@/components/base/toastNotif";
import { LanguageProvider } from "@/providers/languageProvider";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <QueryProvider>
            <ToastNotif>
              <QueryClientProvider client={queryClient}>
                <Navbar local="en" />
                {children}
                <Container stylebg="bg-[#1A202C]" className="min-h-[566px]">
                  <Footer />
                </Container>
              </QueryClientProvider>
            </ToastNotif>
          </QueryProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
