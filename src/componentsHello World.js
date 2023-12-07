import { memo } from "react";

const BlogTitle = memo(({ blogtitle }) => {
  return (
    <h3 className="m-0 relative text-[1.5rem] font-medium font-poppins text-black text-left">
      {blogtitle}
    </h3>
  );
});

export default BlogTitle;
