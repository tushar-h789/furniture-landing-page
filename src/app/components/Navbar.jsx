import Image from 'next/image'
import card from '../../../public/images/card.png'

const Navbar = () => {
  return (
    <div className="bg-[#E9F4EE] mx-auto py-10">
      <div className="flex items-center w-full">
        <div className="font-bas font-normal  text-4xl w-[20%] text-center uppercase text-black">Timber Trove</div>
        <div className='w-[60%]'>
          <ul className="flex items-center justify-center gap-x-10 font-mochiy font-normal text-xl uppercase">
            <li >Home</li>
            <li >Shop</li>
            <li >Features</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex items-center w-[20%] gap-14 justify-center'>
          <div>
            <Image src={card} alt='card' width={40} height={40}/>
          </div>
          <div>
            <button className='border-2 border-black px-7 py-3 rounded-md font-mochiy font-bold text-xl uppercase'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar