import Container from "@/components/base/Container";
import StartNewProject from "@/components/blocs/StartNewProject";
import Badge from "@/components/ui/Badge";
import BlogCard from "@/components/ui/BlogCard";
import MyIcons from "@/components/ui/MyIcons";
import PageIntro from "@/components/ui/PageIntro";

const page = () => {
  return (
    <>
      <PageIntro
        title="Blog"
        img="/titles/blog.webp"
        links={[
          { title: "Home", link: "/" },
          { title: "Blog", link: "/blog" },
        ]}
      />
      <main>
        <Container className="flex flex-col md:flex-row justify-center items-start gap-[50px] py-[100px]">
          <div className="w-full px-6 md:px-0 md:w-1/4 flex flex-col gap-10">
            <div className="flex px-3 py-2 rounded-full w-full bg-[#373C44] gap-2">
              <MyIcons value="lens" />
              <input type="text" placeholder="Search" className="w-full" />
            </div>

            <div className="flex flex-col gap-6 px-4 py-3 rounded-2xl w-full md:bg-[#373C44]">
              <h4>{"Categories"}</h4>

              <div className="flex flex-wrap md:flex-col gap-2">
                {[
                  "Web Design",
                  "Hosting",
                  "Coding",
                  "SEO",
                  "Development tools",
                ].map((category, index) => {
                  const last = category == "Development tools";
                  return (
                    <span
                      key={index}
                      className={`p-2 outline-1 md:outline-none rounded-full md:rounded-none py-1 ${
                        !last && "md:border-b"
                      }`}
                    >
                      <h6>{category}</h6>
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-6 px-4 py-3 rounded-2xl w-full bg-[#373C44]">
              <h4>{"Top Posts"}</h4>

              <div className="flex flex-col gap-2">
                {[
                  {
                    title: "Why Every African Business Needs a Website in 2025",
                    resume:
                      "In an age where 70% of customers look online before making a purchase...",
                  },
                  {
                    title: "Why Every African Business Needs a Website in 2025",
                    resume:
                      "In an age where 70% of customers look online before making a purchase...",
                  },
                  {
                    title: "Why Every African Business Needs a Website in 2025",
                    resume:
                      "In an age where 70% of customers look online before making a purchase...",
                  },
                  {
                    title: "Why Every African Business Needs a Website in 2025",
                    resume:
                      "In an age where 70% of customers look online before making a purchase...",
                  },
                ].map((post, index) => {
                  const last = index == 3;
                  return (
                    <span
                      key={index}
                      className={`p-2 flex flex-col gap-2 ${
                        !last && "border-b"
                      }`}
                    >
                      <h6>{post.title}</h6>
                      <p>{post.resume}</p>
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="hidden md:grid grid-cols-1 w-full h-fit gap-6 py-3">
              {[
                "/ads/ads0.jpeg",
                "/ads/ads2.jpeg",
                "/ads/ads3.jpeg",
                "/ads/ads4.jpeg",
              ].map((ads, index) => (
                <img
                  key={index}
                  alt={ads.split("/").pop()}
                  src={ads}
                  className="rounded-xl h-[150px] w-full object-cover bg-gray-200"
                />
              ))}
            </div>
          </div>
          <div className="w-full justify-center items-center md:w-3/4 flex flex-col gap-10">
            <div className="w-fit p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {[
                { imgurl: "/services/web.jpeg", link: "/blog/How-to" },
                { imgurl: "/services/erp.jpeg", link: "/blog/How-to" },
                { imgurl: "/services/ecom.jpeg", link: "/blog/How-to" },
                { imgurl: "/services/web.jpeg", link: "/blog/How-to" },
                { imgurl: "/services/erp.jpeg", link: "/blog/How-to" },
                { imgurl: "/services/ecom.jpeg", link: "/blog/How-to" },
                { imgurl: "/services/web.jpeg", link: "/blog/How-to" },
                { imgurl: "/services/erp.jpeg", link: "/blog/How-to" },
                { imgurl: "/services/ecom.jpeg", link: "/blog/How-to" },
              ].map((item, index) => (
                <BlogCard img={item.imgurl} key={index} link={item.link} />
              ))}
            </div>
            <div className="flex justify-center items-center gap-3">
              <Badge icon={"prev"} />
              {[1, 2, 3, 4].map((item, index) => (
                <Badge icon={"number"} num={item} key={index} />
              ))}
              <Badge icon={"next"} />
            </div>
          </div>
        </Container>

        <StartNewProject />
      </main>
    </>
  );
};

export default page;
