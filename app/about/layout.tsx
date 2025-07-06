import PageIntro from "@/components/ui/PageIntro";
import { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

export const metadata: Metadata = {
  title: "Winter code design - about us",
  description: "Share your projects and let's work together",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <>
      <PageIntro
        title="about"
        img="/titles/about.webp"
        links={[
          { key: "home", title: "Home", link: "/" },
          { key: "about", title: "About", link: "/about" },
        ]}
      />
      {children}
    </>
  );
}
