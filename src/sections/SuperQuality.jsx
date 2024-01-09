import { shoe8 } from "../assets/images"



const SuperQuality = () => {
  return (
    <div className="mt-10 ml-56">
      <div className="flex gap-30 ">
        <div className="flex-1 w-96 h-96">
        <p className=" text-4xl font-bold">We Provide You <p className="text-orange-600 text-1xl font-bold">Super Quality</p> Shoes</p>
        <p  className="mt-10 text-base tracking-widest">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-10 text-base tracking-widest">
Our dedication to detail and excellence ensures your satisfaction</p>  
          <button className="button bg-orange-600 text-white-400 rounded-full px-10 py-4 mt-10">View Details</button>
        </div>
        <div className="flex-1 w-124 h-124">
        <img src={shoe8} alt="shoe8"/>
          
        </div>
      </div>
    </div>
  )
}

export default SuperQuality
