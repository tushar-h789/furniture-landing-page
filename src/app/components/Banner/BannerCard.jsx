import Image from "next/image"

const BannerCard = ({src, title, price, del}) => {
  return (
    <div className="bg-white w-[372px] h-[260px] shadow-2xl -mt-24 z-10 rounded-lg">
        <div className="text-center mx-auto w-full flex justify-center ">
            <Image src={src} alt="comfyChair" width={200} height={200} className="-mt-28"/>
        </div>
        <div className="text-center mt-7 pb-14">
            <h4 className="font-mochiy text-xl font-semibold mt-7 mb-3">{title}</h4>
            <p className="pb-4"><del className="text-[#BFBFBF] mr-4 text-del">{del}</del> ${price}</p>
        </div>
    </div>
  )
}

export default BannerCard