import { copyrightSign, facebook, instagram, twitter } from "../assets/icons"
import { footerLogo } from "../assets/images"

const Footer = () => {
  return (
    <section>

    <section className="mt-10 ml-56 flex justify-between gap-8">
    <div className="flex-1 px-5 py-5 ">
      <img src={footerLogo} alt="footer logo" width={150}/>
      <p className="mt-10">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
      <div className="flex flex-row gap-8">
      <img className="mt-10 bg-white items-center px-4 py-4 rounded-full" src={facebook} alt="facebook"/> 
      <img className="mt-10 bg-white items-center px-4 py-4 rounded-full" src={twitter} alt="Twitter"/>
      <img className="mt-10 bg-white items-center px-4 py-4 rounded-full" src={instagram} alt="instagram"/>

      </div>
          </div>
    <div className="flex-1 ">
    <h3 className="text-bold text-3xl">Products</h3>
    <ul className="mt-4 space-y-3 font-xl">
      <li><a href="/">Air Force 1</a></li>
      <li><a href="/">Air Max 1</a></li>
      <li><a href="/">Air Jordan 1</a></li>
      <li><a href="/">Air Force 2</a> </li>
      <li><a href="/">Nike Waffle Racer</a></li>
      <li><a href="/">Nike Cortez</a></li>
    </ul>
      
    </div>
    <div className="flex-1 ">
    <h3 className="text-bold text-3xl">Help</h3>
    <ul className="mt-4 space-y-3 font-xl">
      <li><a href="/">About Us</a></li>
      <li><a href="/">FAQs</a></li>
      <li><a href="/">How it works</a></li>
      <li><a href="/">Privacy policy</a> </li>
      <li><a href="/">Pyment policy</a></li>
    </ul>
          </div>
          <div className="flex-1 ">
          <h3 className="text-bold text-3xl">Help</h3>
    <ul className="mt-4 space-y-3 font-xl">
      <li><a href="/">customer@nike.com</a></li>
      <li><a href="/">+4917675861216</a></li>
      </ul>
          </div>    
    </section>
    <section>
    <div className="flex ml-56 mt-10 items-center justify-center">
    <div className="flex-1">
    <span><img src={copyrightSign} alt="copyright"/>Copyright.All rights reserved</span>
    </div>
    <div className="flex-1">
    Terms and Conditions
    </div>
    </div>             
    
    </section>
    
    </section>
  )
}

export default Footer
