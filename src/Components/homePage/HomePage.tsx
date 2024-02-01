import { useTranslation } from "react-i18next";
import menWithComputer from "../../assets/menWithComputer.png";
import BusinessCard from "./BusinessCard";
import ChooseCategory from "./ChooseCategory";
import FuturePosts from "./FuturePosts";
import JoinNow from "./JoinNow";
import ListOfAuthers from "./ListOfAuthers";
import Testimonials from "./Testimonials";
import WhyWeStarted from "./WhyWeStarted";
import NavBar from "../NavBar.tsx";
import Footer from "../Footer.tsx";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <div className="relative">
        <img
          className="w-full h-[845px] object-cover"
          src={menWithComputer}
          alt="Background"
        />
        <div className="absolute top-1/2 lg:left-1/3 sm:left-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-md mx-auto text-white font-sans p-4 sm:p-8">
          <p className="text-base pb-3">
            POSTED ON <b>STARTUP</b>
          </p>
          <p className="pb-3 text-2xl sm:text-4xl lg:text-6xl">
            Step-by-step guide to choosing great font pairs
          </p>
          <p className="pb-3 text-base">
            By <strong className="text-amber-300">James West</strong> | May 23,
            2022
          </p>
          <p className="pb-3 text-base">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button className="font-bold pb-2 bg-amber-300 text-black w-1/4 h-14">
            {t("Read More")} &#62;
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
      <Footer />
    </>
  );
};

export default HomePage;
