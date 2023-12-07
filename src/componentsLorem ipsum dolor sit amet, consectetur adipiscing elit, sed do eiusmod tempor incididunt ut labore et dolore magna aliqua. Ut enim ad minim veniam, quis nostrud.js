import { memo } from "react";

const BlogDesc = memo(({ blogdescription }) => {
  return (
    <div className="self-stretch relative text-[1rem] font-poppins text-black text-left">
      {blogdescription}
    </div>
  );
});

export default BlogDesc;
