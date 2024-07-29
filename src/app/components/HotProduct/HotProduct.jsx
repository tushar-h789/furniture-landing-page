import HotProductsCard from "./HotProductsCard"
import one from '../../../../public/images/hot-first.png'
import middle from '../../../../public/images/hot-middle.png'
import three from '../../../../public/images/hot-three.png'

const HotProduct = () => {
  return (
    <>
      <div className="flex items-center gap-6">
      <HotProductsCard src={one} header='Hot Product' title="Lounge Chair" button="Shop now"/>
      <HotProductsCard src={middle} />
      <HotProductsCard src={three} header='Hot Product' title="Lounge Chair" button="Shop now"/>
      </div>
    </>
  )
}

export default HotProduct