import Content from "./Content";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  return <Content slug={slug} />;
};

export default page;
