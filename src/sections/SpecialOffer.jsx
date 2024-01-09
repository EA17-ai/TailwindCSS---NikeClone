
import { offer } from "../assets/images"


const SpecialOffer = () => {
  return (
    <div className="mt-10 ml-56">
      <div className="flex justify-center gap-6">
        <div className="flex-1 w-full">
          <img src={offer} alt="offer" width={700} height={700}/>
        </div>
        <div className="flex-1 w-full">
        <p className="text-4xl font-bold"><span className="text-coral-red">Special</span> Offer</p>
        <p className=" mt-8 text-gray-500 text-3xl font-palanquin leading-normal space-x-5 space-y-3"> 
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.

Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
</p>
          <button className="mt-6 button bg-coral-red rounded-full px-20 py-6 text-lg text-white ">Shop now</button>
          <button className=" ml-4 mt-6 button  rounded-full px-20 py-6 text-lg  border ">Learn More</button>

          </div>
  
      </div>
      
    </div>
  )
}

export default SpecialOffer
