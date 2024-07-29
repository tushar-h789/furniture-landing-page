import Navbar from "./components/Navbar";
import Banner from "./components/Banner/Banner";
import HotProduct from "./components/HotProduct/HotProduct";
import NewArrival from "./components/NewArrival/NewArrival.jsx";
import BestDeals from "./components/BestDeals/BestDeals";
import HandPick from "./components/HandPick/HandPick";
import Kitchen from "./components/Kitchen/Kitchen";
import OutBlog from "./components/OurBlog/OutBlog";
import FeedbackCorner from "./components/FeedbackCorner/FeedbackCorner";
import TopBrand from "./components/TopBrand/TopBrand";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <Banner />
      <HotProduct />
      <NewArrival />
      <BestDeals />
      <HandPick />
      <Contact />
      <Kitchen />
      <OutBlog />
      <FeedbackCorner />
      <TopBrand/>
      <Footer/>
    </div>
  );
}
