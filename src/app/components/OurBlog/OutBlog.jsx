import OurBlogCard from "./OurBlogCard";
import blog1 from "../../../../public/images/blog1.png";
import blog2 from "../../../../public/images/blog2.png";
import blog3 from "../../../../public/images/blog3.png";

const OutBlog = () => {
  return (
    <div className="mt-[750px] mb-[68px]">
      <h2 className="font-mochiy font-medium text-3xl text-center">Our Blog</h2>

      <div className="flex items-center gap-10 mt-16 justify-center">
      <OurBlogCard
        src={blog1}
        category="Dining Chair"
        title="DOUBLE SOFA- ATHENS"
        description='"Elegant, ergonomic dining chair with premium materials and modern design."'
        button="Read more"
      />
      <OurBlogCard
        src={blog2}
        category="Dining Chair"
        title="DOUBLE SOFA- ATHENS"
        description='"Elegant, ergonomic dining chair with premium materials and modern design."'
        button="Read more"
      />
      <OurBlogCard
        src={blog3}
        category="Dining Chair"
        title="DOUBLE SOFA- ATHENS"
        description='"Elegant, ergonomic dining chair with premium materials and modern design."'
        button="Read more"
      />
      </div>
    </div>
  );
};

export default OutBlog;
