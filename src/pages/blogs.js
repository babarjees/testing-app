import Blogs1 from "../components/blogs1";
import BlogPost from "../components/blog-post";
import BlogTitle from "../Hello World";
import BlogDesc from "../Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

const Blogs = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start p-[6.25rem] box-border gap-[6.94rem] text-left text-[3rem] text-black font-poppins lg:pl-[1.56rem] lg:pr-[1.56rem] lg:box-border md:items-start md:justify-start md:pl-[1.56rem] md:pr-[1.56rem] md:box-border sm:pl-[1.56rem] sm:pr-[1.56rem] sm:box-border">
      <Blogs1 blogs="Blogs" />
      <section className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[1.38rem] text-left text-[1.5rem] text-black font-poppins lg:flex-row lg:gap-[1.38rem] lg:items-center lg:justify-start md:flex-col md:gap-[1.38rem] md:items-center md:justify-start sm:flex-col sm:gap-[1.38rem] sm:items-center sm:justify-start">
        <BlogPost />
        <div className="flex-1 rounded-xl bg-white flex flex-col items-center justify-center gap-[2.25rem] border-[1px] border-solid border-lightgray md:flex-col md:pl-[0rem] md:box-border md:cursor-pointer md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
          <img
            className="self-stretch relative rounded-t-xl rounded-b-none max-w-full overflow-hidden h-[11.88rem] shrink-0 object-cover"
            alt=""
            src="/rectangle-21@2x.png"
          />
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[0rem] pr-[0rem] pl-[1.56rem] gap-[3.25rem]">
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[1.88rem]">
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-center">
                <BlogTitle blogtitle="Hello World" />
              </div>
              <BlogDesc blogdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " />
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center pt-[0rem] px-[0rem] pb-[1.56rem] text-[1rem] text-blue">
              <div className="relative">Read more</div>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-white flex flex-col items-center justify-center gap-[2.25rem] border-[1px] border-solid border-lightgray md:flex-col md:pl-[0rem] md:box-border md:cursor-pointer md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
          <img
            className="self-stretch relative rounded-t-xl rounded-b-none max-w-full overflow-hidden h-[11.88rem] shrink-0 object-cover"
            alt=""
            src="/rectangle-22@2x.png"
          />
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[0rem] pr-[0rem] pl-[1.56rem] gap-[3.25rem]">
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[1.88rem]">
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-center">
                <BlogTitle blogtitle="Hello World" />
              </div>
              <BlogDesc blogdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " />
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center pt-[0rem] px-[0rem] pb-[1.56rem] text-[1rem] text-blue">
              <div className="relative">Read more</div>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-xl bg-white flex flex-col items-center justify-center gap-[2.25rem] border-[1px] border-solid border-lightgray md:flex-col md:pl-[0rem] md:box-border md:cursor-pointer md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
          <img
            className="self-stretch relative rounded-t-xl rounded-b-none max-w-full overflow-hidden h-[11.88rem] shrink-0 object-cover"
            alt=""
            src="/rectangle-23@2x.png"
          />
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[0rem] pr-[0rem] pl-[1.56rem] gap-[3.25rem]">
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[1.88rem]">
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-center">
                <BlogTitle blogtitle="Hello World" />
              </div>
              <BlogDesc blogdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " />
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center pt-[0rem] px-[0rem] pb-[1.56rem] text-[1rem] text-blue">
              <div className="relative">Read more</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
