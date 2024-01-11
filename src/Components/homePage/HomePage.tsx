import menWithComputer from "../../assets/menWithComputer.png";
import BusinessCard from "./BusinessCard";
import ChooseCategory from "./ChooseCategory";
import FuturePosts from "./FuturePosts";
import JoinNow from "./JoinNow";
import ListOfAuthers from "./ListOfAuthers";
import Testimonials from "./Testimonials";
import WhyWeStarted from "./WhyWeStarted";

const HomePage = () => {
  return (
    <>
      <div className="w-full relative">
        <img className="w-full brightness-50" src={menWithComputer} />
        <div className="absolute top-52 left-20 w-3/4 h-96 text-white font-sans ">
          <p className="top-52 text-base pb-11">
            POSTED ON <b>STARTUP</b>
          </p>
          <p className="pb-11 text-6xl w-3/4">
            Step-by-step guide to choosing great font pairs
          </p>
          <p className="pb-11 text-base">
            By <strong className="text-amber-300">James West </strong>| May 23,
            2022
          </p>
          <p className="pb-11 text-base w-2/4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button className="font-bold pb-2 bg-amber-300 text-black w-52 h-14">
            Read More &#62;
          </button>
        </div>
      </div>
      <FuturePosts />
      <BusinessCard />
      <ChooseCategory />
      <WhyWeStarted />
      <ListOfAuthers />
      <Testimonials />
      <JoinNow />
    </>
  );
};

export default HomePage;
