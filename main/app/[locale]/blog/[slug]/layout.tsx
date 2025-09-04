import PageDetailIntro from "@/components/ui/PageDetailIntro";
import PageIntro from "@/components/ui/PageIntro";
import { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export const metadata: Metadata = {
  title: "Winter code design - latest news",
  description: "Share your projects and let's work together",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "fr" }];
}

export default async function Layout({ children, params }: LayoutProps) {
  const { slug } = await params;
  return (
    <>
      <PageDetailIntro
        title={slug.replaceAll("-", " ")}
        img="/blogs/blog1.jpeg"
        className="h-[70vh]"
        links={[
          { key: "home", title: "Home", link: "/" },
          { key: "blog", title: "Blog", link: "/blog" },
          { key: slug, title: slug.replaceAll("-", " "), link: slug },
        ]}
      />
      {children}
    </>
  );
}
