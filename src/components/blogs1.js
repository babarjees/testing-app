import { memo } from "react";

const Blogs1 = memo(({ blogs }) => {
  return (
    <h1 className="m-0 self-stretch relative text-inherit font-medium font-inherit">
      {blogs}
    </h1>
  );
});

export default Blogs1;
