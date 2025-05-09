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
        title="About"
        img="/bg/laptop.png"
        links={[
          { title: "Home", link: "/" },
          { title: "About", link: "/about" },
        ]}
      />
      {children}
    </>
  );
}
