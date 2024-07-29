import Image from "next/image";
import kitchen from "../../../../public/images/kitchen.png";

const Kitchen = () => {
  return (
    <div className="relative">
      <div className="h-[200px]">
        <Image src={kitchen} alt="kitchen" width={1600} height={800} />
      </div>
      <div className="mx-auto text-center absolute top-52 left-80">
        <div className="bg-[#FF6F00] px-10 py-6 z-10 rounded-md w-96 mx-auto">
        <p className="text-white font-poppins font-bold text-3xl">Shop the look</p>

        </div>
        <h2 className="font-poppins font-bold text-[190px] text-white">Kitchen</h2>
        <p className="font-poppins font-bold text-3xl text-white">Creating your beautiful home should not <br /> Cost the World!</p>
      </div>
    </div>
  );
};

export default Kitchen;
