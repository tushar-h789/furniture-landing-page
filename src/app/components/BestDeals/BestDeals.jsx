import Image from "next/image";
import bestDealOne from "../../../../public/images/best-deal1.png";
import bestDealTwo from "../../../../public/images/best-deal2.png";

const BestDeals = () => {
  return (
    <>
        <div className="bg-[#647485] flex">
      <div className="pt-[256px] pl-36 text-white ">
        <h2 className="font-mochiy font-normal text-3xl ">Best Deals</h2>
        <p className="font-mochiy font-normal text-xl  mt-5 mb-14">$77.00</p>
        <p className="font-mochiy font-normal text-xl mb-7">
          Grab your best offers!!
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-lg font-mochiy font-normal">
          Shop now
        </button>
      </div>

      <div className="flex items-center gap-4 font-mochiy font-normal text-base">
        <div className="w-14  ml-20">
          <p className="bg-[#FF6F00] text-white text-lg font-bold p-4 rounded-md ">
            10
          </p>
          <p className="font-mochiy  text-white uppercase text-center mt-2">
            Days
          </p>
        </div>
        <div className="w-14  ">
          <p className="bg-[#FF6F00] text-white text-lg font-bold p-4 rounded-md ">
            11
          </p>
          <p className="font-mochiy text-white uppercase text-center mt-2">
            Hour
          </p>
        </div>
        <div className="w-14  ">
          <p className="bg-[#FF6F00] text-white text-lg font-bold p-4 rounded-md ">
            13
          </p>
          <p className="font-mochiy text-white uppercase text-center mt-2">
            Mins
          </p>
        </div>
        <div className="w-14">
          <p className="bg-[#FF6F00] text-white text-lg font-bold p-4 rounded-md ">
            20
          </p>
          <p className="font-mochiy text-white uppercase text-center mt-2">
            Secs
          </p>
        </div>
      </div>
      <div className="flex items-center mt-72">
        <Image src={bestDealTwo} alt="best deal" width={361} height={543} />
        <Image src={bestDealOne} alt="best deal" width={386} height={626} />
      </div>
    </div>
      <div className="bg-[#CDC9C4] h-28"> </div>
    </>
  );
};

export default BestDeals;
