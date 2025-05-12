import React from "react";
import Container from "../base/Container";
import SectionHead from "../ui/SectionHead";
import BlogCard from "../ui/BlogCard";

const ShortNewsList = () => {
  return (
    <Container className="flex flex-col justify-center items-center gap-[50px] min-h-[60vh] py-[100px]">
      <SectionHead
        sectionTitle={"Our Latest news"}
        sectionSubtitle={"We keep you on track"}
        sectionDescription={
          "You can fnd here and extract of our latest activities and news in the domain"
        }
      />

      <div className="flex flex-wrap flex-col md:flex-row justify-center items-center w-full gap-4">
        {[
          { imgurl: "/services/web.jpeg", link: "/blog/How-to" },
          { imgurl: "/services/erp.jpeg", link: "/blog/How-to" },
          { imgurl: "/services/ecom.jpeg", link: "/blog/How-to" },
          { imgurl: "/services/web.jpeg", link: "/blog/How-to" },
        ].map((item, index) => (
          <BlogCard img={item.imgurl} key={index} link={item.link} />
        ))}
      </div>
    </Container>
  );
};

export default ShortNewsList;
