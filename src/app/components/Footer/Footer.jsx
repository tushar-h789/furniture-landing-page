import Image from "next/image";
import facebook from "../../../../public/images/fb.png";
import instagram from "../../../../public/images/insta.png";
import twitter from "../../../../public/images/twitter.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#E9F4EE] p-[100px] pb-[232px] flex items-center justify-between">
        <div>
          <h1 className="font-bas font-bold text-4xl uppercase text-black">
            Timber Trove
          </h1>
          <p className="mt-9 mb-5 font-poppins font-medium text-lg">
            Social Media
          </p>
          <div className="flex items-center gap-4">
            <Image src={facebook} alt="fb" width={30} height={30} />
            <Image src={instagram} alt="fb" width={30} height={30} />
            <Image src={twitter} alt="fb" width={30} height={30} />
          </div>
        </div>
        <div>
          <ul className="font-poppins font-medium text-base">
            <li className="font-mochiy font-medium text-lg uppercase">Shop</li>
            <li className="my-4">Products</li>
            <li>Overview</li>
            <li className="my-4">Pricing</li>
            <li>Releases</li>
          </ul>
        </div>
        <div>
          <ul className="font-poppins font-medium text-base">
            <li className="font-mochiy font-medium text-lg uppercase">
              Company
            </li>
            <li className="my-4">About us</li>
            <li>Contact</li>
            <li className="my-4">News</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase font-mochiy font-medium text-lg">
            Stay up to date
          </h4>
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
      </div>
    </>
  );
};

export default Footer;
