import Image from "next/image";
import banner from "../../../../public/images/banner-img.png";
import wood from "../../../../public/images/wood.png";
import edition from "../../../../public/images/2024 edition.png";
import number from "../../../../public/images/number.png";
import BannerCard from "./BannerCard";
import comfyChair from "../../../../public/images/comfyChair.png";
import comfyChair2 from "../../../../public/images/comfyChair2.png";
import vibeLivingChair from "../../../../public/images/vibeLiving-chair.png";

const Banner = () => {
  return (
    <>
      <div className="bg-[#E9F4EE] py-10 pb-72 flex items-center relative -z-10">
        {/* wood and date part */}
        <div className=" absolute -top-28 left-0 flex items-center">
          <div className="absolute top-48 left-60">
            <Image src={edition} alt="edition" width={20} height={200} />
          </div>
          <div className="relative ml-20 mt-20">
            <Image src={wood} alt="edition" width={570} height={470} />
          </div>
        </div>

        {/* Chair and new arrivals part */}
        <div className="w-[80%] mx-auto relative">
          <div className="text-center relative">
            <h2 className="font-mochiy text-[#FFC39A] font-extrabold text-[162px] absolute top-2 left-40 z-20">
              New
            </h2>
            <Image
              src={banner}
              alt="banner"
              width={400}
              height={400}
              className="mx-auto relative z-10"
            />
            <div className="border-l-4 border-black inline-block mr-[450px] -mt-28 font-mochiy font-bold text-base ">
              <p className="ml-2">TimberTrove</p>
              <p>Furniture</p>
            </div>
            <h2 className="font-mochiy text-[#FF6F00] font-extrabold text-[101px] absolute top-[230px] right-36 ">
              arrivals
            </h2>
          </div>
        </div>

        {/* right site date part */}
        <div className="absolute top-0 right-0">
          <div className="mr-[467px] mt-16">
            <Image src={number} alt="number" width={50} height={100} />
          </div>
          <div className="mt-40 ml-96">
            <Image src={edition} alt="edition" width={20} height={200} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-center gap-7 ">
        <div className="">
          <BannerCard src={comfyChair} title="Comfy  Chair" price="30.50" />
        </div>
        <div>
          <BannerCard
            src={comfyChair2}
            title="Comfy  Chair"
            del="$17.50"
            price="30.50"
          />
        </div>
        <div>
          <BannerCard
            src={vibeLivingChair}
            title="VibeLiving Chair"
            del="$17.50"
            price="30.50"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
