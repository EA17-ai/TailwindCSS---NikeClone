import { shieldTick, truckFast } from "../assets/icons"

const Services = () => {
  return (
    
    <div className="ml-56 flex justify-center max-container flex-wrap gap-9">
 
        <div className="flex-1 flex-col w-[300px] h-[300px] px-10  py-16 shadow-3xl rounded-3xl">
        <img src={truckFast} alt="truck-fast" className="bg-coral-red rounded-full p-4"/>
        <p className="text-2xl font-bold font-montserrat px-4 mt-6">Free shipping</p>
        <p className="text-xl break-words font-palanquin px-4 mt-6 leading-normal">Enjoy seamless shopping with our complimentary shipping service.</p>
      </div>
      <div className="flex-1 flex-col w-[300px] h-[300px] px-10  py-16 shadow-3xl rounded-3xl">
      <img src={shieldTick} alt="truck-fast" className="bg-coral-red rounded-full p-4"/>
      <p className="text-2xl font-bold font-montserrat px-4 mt-6">Secure Payment</p>
        <p className="text-xl break-words font-palanquin px-4 mt-6 leading-normal">Experience worry-free transactions with our secure payment options.</p>
      
      </div>
 
      <div className="flex-1 flex-col w-[300px] h-[300px] px-10  py-16 shadow-3xl rounded-3xl">
      <img src={truckFast} alt="truck-fast" className="bg-coral-red rounded-full p-4"/>
      <p className="text-2xl font-bold font-montserrat px-4 mt-6">Love to help you</p>
        <p className="text-xl break-words font-palanquin px-4 mt-6 leading-normal">Our dedicated team is here to assist you every step of the way.</p>
      
      </div>
 
    </div>
  )
}

export default Services
