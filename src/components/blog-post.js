import { memo } from "react";
import BlogImage from "./blog-image";
import BlogTitle from "Hello World";
import BlogDesc from "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
import ReadMore from "./read-more";

const BlogPost = memo(() => {
  return (
    <div className="flex-1 rounded-xl bg-white flex flex-col items-center justify-center gap-[2.25rem] text-left text-[1.5rem] text-black font-poppins border-[1px] border-solid border-lightgray md:flex-col md:pl-[0rem] md:box-border md:cursor-pointer md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
      <BlogImage blogimage="/rectangle-2@2x.png" />
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[0rem] pr-[0rem] pl-[1.56rem] gap-[3.25rem]">
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[1.88rem]">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-center">
            <BlogTitle blogtitle="Blog Title" />
          </div>
          <BlogDesc blogdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-center pt-[0rem] px-[0rem] pb-[1.56rem] text-[1rem] text-blue">
          <ReadMore readMore="Read more" />
        </div>
      </div>
    </div>
  );
});

export default BlogPost;
