import Image from "next/image"
import first from '../../../../public/images/hot-first.png'
import second from '../../../../public/images/hot-middle.png'
import three from '../../../../public/images/hot-three.png'

const HotProductsCard = ({src, header, title, button }) => {
  return (
    <div className="mt-32 mb-8 relative mx-auto">
        <div className="relative">
            <Image src={src} alt="first" width={400} height={368}/>
        </div>
        <div className="absolute top-64 left-4">
        <p className="font-bas font-medium text-base text-[#4D4B4F]">{header}</p>
            <h3 className="font-mochiy font-bold text-xl">{title}</h3>
            <p className="font-bas font-medium text-base text-[#4D4B4F]">{button}</p>
        </div>
    </div>
  )
}

export default HotProductsCard