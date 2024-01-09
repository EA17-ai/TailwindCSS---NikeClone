import Nav from "./components/Nav"
import {Hero,PopularProducts,SuperQuality,SpecialOffer,Subscribe,CustomerReviews,Footer,Services} from "./sections/index"
export default function App() {
  return (
    <main className="relative">
    <Nav/>
    <section className="w-full justify-center w-50 h-50 xl:padding-1 wide:padding-r padding-b ">
    <Hero/>
    </section>
    <section className="padding ">
    <PopularProducts />
    </section>
    <section className="padding ">
    <SuperQuality /> 
    </section>
    <section className="padding ">
    <Services />
    </section>
    <section className="padding ">
    <SpecialOffer/>
    </section>
    <section className="padding bg-pale-blue ">
    <CustomerReviews /> 
    </section>
    <section className="padding-x sm:py-32 py-16 w-full ">
    <Subscribe />
    </section>
    <section className="padding bg-black text-white-400 ">
    <Footer />
    </section>
    </main>
  )
}