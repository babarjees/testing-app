import { memo } from "react";

const BlogImage = memo(({ blogimage }) => {
  return (
    <img
      className="self-stretch relative rounded-t-xl rounded-b-none max-w-full overflow-hidden h-[11.88rem] shrink-0 object-cover"
      alt=""
      src={blogimage}
    />
  );
});

export default BlogImage;
