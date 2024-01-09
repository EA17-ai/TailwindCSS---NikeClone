import { customer1, customer2 } from "../assets/images"

const CustomerReviews = () => {
  return (
    <div className="flex max-container flex-col mt-10 justify-center ">
    <h3 className="flex-1 w-full text-4xl font-extrabold text-center">What Our <span className="text-coral-red">Customers</span> Say?</h3>
    <p className="mt-4 text-slate-500 flex-1 w-full text-xl font-extrabold text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
    <div className="flex mt-20 gap-6">
      <div className="flex-1 border-2 px-10 py-16 justify-center items-center w-full shadow-3xl">
      <img src={customer1} alt="customer1" width={100} height={100} className="rounded-full justify-center"/>
      <p className="info-text mt-8">The attention to detail and the quality of the product exceeded my expectations. Highly recommended!</p>
      <h4 className="text-3xl font-bold">Eric</h4>
      </div>
      <div className="flex-1  px-10 py-16 justify-center items-center  w-full shadow-3xl">
      <img src={customer2} alt="customer2" width={100} height={100} className=" object-cover rounded-full justify-center" />
      <p className="mt-8 info-text">The product not only met but exceeded my expectations. I'll definitely be a returning customer!</p>
      <p className="text-3xl font-bold">Lisa</p>
      </div>
    </div>
    </div>
  )
}

export default CustomerReviews
