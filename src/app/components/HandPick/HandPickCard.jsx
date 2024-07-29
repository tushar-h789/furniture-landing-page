import Image from "next/image"


const HandPickCard = ({src, title, price, rating, star}) => {
  return (
    <div>
        <div className="mb-28 items-center ">
            <Image src={src} alt="arrival" width={333} height={330} />
            <div className="mx-auto">
            <h4 className="font-poppins font-semibold text-base text-[#373737] mt-12 mb-2">{title}</h4>
            <div className="flex items-center gap-20">
                <p className="font-poppins font-semibold text-base text-[#373737]">{price}</p>
                {/* <div className="border-l-4"></div> */}
                <div className="flex items-center gap-2">
                <p className="font-poppins font-semibold text-base text-[#373737] ">{rating}</p>
                <p>{star}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HandPickCard