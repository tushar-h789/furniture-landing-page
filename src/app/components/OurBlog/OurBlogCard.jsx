import Image from "next/image";
import blog1 from "../../../../public/images/blog1.png";

const OurBlogCard = ({src, category, title, description, button}) => {
  return (
    <div className="w-[420px]">
      <div>
        <Image src={src} alt="blog" width={418} height={267} />
      </div>
      <div>
        <p className="text-[#FF6F00] font-poppins font-medium text-base mt-9 mb-3">
          {category}
        </p>
        <h3 className="font-mochiy font-normal text-xl text-black">
         {title}
        </h3>
        <p className="text-[#979797] font-poppins font-normal text-base mt-2 mb-7">
          {description}
        </p>
        <button className="font-mochiy font-normal text-sm border-b-4 border-black ">
          {button}
        </button>
      </div>
    </div>
  );
};

export default OurBlogCard;
