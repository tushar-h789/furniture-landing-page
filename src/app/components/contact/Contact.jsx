import Image from "next/image";
import email from "../../../../public/images/email.png";
import rightSite from "../../../../public/images/contact-right-site.png";
const Contact = () => {
  return (
    <div className="flex items-center">
      <div className="w-1/2 py-[98px] px-[99px] bg-[#F0F8F6]">
        <div className=" flex items-center gap-3">
          <Image src={email} alt="email" width={50} height={50} />
          <p className="font-poppins font-base text-md">
            Subscribe to get $30 off* <br />
            your first order
          </p>
        </div>
        <div className="mt-10 flex items-center">
          <input
            type="text"
            placeholder="Enter your email"
            className="rounded-lg px-20 py-4 border border-black"
          />
          <button className="bg-black text-white px-9 py-4 rounded-lg">
            Submit
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-red-200">
        <Image src={rightSite} alt="right site" width={800} height={200} />
      </div>
    </div>
  );
};

export default Contact;
