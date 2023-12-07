import { memo } from "react";

const ReadMore = memo(({ readMore }) => {
  return (
    <div className="relative text-[1rem] font-poppins text-blue text-left">
      {readMore}
    </div>
  );
});

export default ReadMore;
