import Image from 'next/image'
import brand1 from '../../../../public/images/b1.png'
import brand2 from '../../../../public/images/b2.png'
import brand3 from '../../../../public/images/b3.png'
import brand4 from '../../../../public/images/b4.png'
import brand5 from '../../../../public/images/b5.png'

const TopBrand = () => {
  return (
    <div className="mt-[100px] mb-[145px]">
        <h2 className="font-mochiy font-bold text-3xl text-center mb-[145px]">Top Brand</h2>
        <div className='flex items-center gap-x-[160px] justify-center'>
            <Image src={brand1} alt='brand' width={150} height={90}/>
            <Image src={brand2} alt='brand' width={150} height={90}/>
            <Image src={brand3} alt='brand' width={150} height={90}/>
            <Image src={brand4} alt='brand' width={150} height={90}/>
            <Image src={brand5} alt='brand' width={150} height={90}/>
        </div>
    </div>
  )
}

export default TopBrand