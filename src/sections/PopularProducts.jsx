import {shoe4,shoe5,shoe6} from "../assets/images"
import { star } from "../assets/icons"
const PopularProducts = () => {
  return (
    <div className="ml-56">
      <h1 className="text-4xl text-bold">Our <b className="text-orange-500">Popular</b> Products</h1>
      <div className="mt-10 w-15 h-5">
      <p>Experience top-notch quality and style with our sought-after selections. 
      </p>  
      <p>Discover a world of comfort, design, and value</p>
      </div>
      <div className="relative flex mt-20 gap-6">
        <div className="relative flex-1 w-80 h-120">
          <img src={shoe4} alt="shoe4"/>
          
          <p className="mt-10 font-bold"><img src={star} alt="star"/>(4.5)</p>
          <p className="mt-5 text-xl font-bold">Nike Air Jordan-01</p>
          <p className="text-orange-500 text-xl mt-5 font-bold">$200.20 </p>
          
        </div>
        <div className= "flex-1 w-80 h-120">
        <img src={shoe5} alt="shoe5"/>
          <p className="mt-10 font-bold"><img src={star} alt="star"/>(4.5)</p>
          <p className="mt-5 text-xl font-bold">Nike Air Jordan-10</p>
          <p className="text-orange-500 text-xl mt-5 font-bold">$210.20 </p>
        </div>
        
        <div className="flex-1 w-80 h-120">
          <img src={shoe6} alt="shoe6"/>
          
          <p className="mt-10 font-bold"><img src={star} alt="star"/>(4.5)</p>
          <p className="mt-5 text-xl font-bold">Nike Air Jordan-01</p>
          <p className="text-orange-500 text-xl mt-5 font-bold">$220.20 </p>
          
        </div>
        <div className="flex-1 w-80 h-120">
          <img src={shoe6} alt="shoe6"/>
          
          <p className="mt-10 font-bold"><img src={star} alt="star"/>(4.5)</p>
          <p className="mt-5 text-xl font-bold">Nike Air Jordan-01</p>
          <p className="text-orange-500 text-xl mt-5 font-bold">$220.20 </p>
          
        </div>
    </div>
    </div>

  )
}

export default PopularProducts
