import HandPickCard from "./HandPickCard"
import woodSofa1 from '../../../../public/images/hand1.png'
import woodSofa2 from '../../../../public/images/hand2.png'
import woodSofa3 from '../../../../public/images/hand3.png'
import woodSofa4 from '../../../../public/images/hand4.png'
import handMiddle from '../../../../public/images/handMiddle.png'
import Image from "next/image"

const HandPick = () => {
  return (
    <div className="w-full relative">
        <h2 className="font-mochiy font-bold text-3xl text-center my-24">Hand Pick</h2>
        <div className="flex justify-between items-center">
            <HandPickCard src={woodSofa1} title='Wooden  sofa Set' price='39.99' rating="5.0" star="⭐"/>
            <HandPickCard src={woodSofa1} title='Wooden  sofa Set' price='39.99' rating="5.0" star="⭐"/>
        </div>
        <div className="absolute top-72 left-[450px]">
            <Image src={handMiddle} alt="middle" width={534} height={461}/>
        </div>
        <div className="flex justify-between items-center">
            <HandPickCard src={woodSofa1} title='Wooden  sofa Set' price='39.99' rating="5.0" star="⭐"/>
            <HandPickCard src={woodSofa1} title='Wooden  sofa Set' price='39.99' rating="5.0" star="⭐"/>
        </div>
    </div>
  )
}

export default HandPick