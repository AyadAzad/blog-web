import { useTranslation } from "react-i18next";
import menWithComputer from "../../assets/menWithComputer.png";
import BusinessCard from "./BusinessCard.tsx";
import ChooseCategory from "./ChooseCategory.tsx";
import FuturePosts from "./FuturePosts.tsx";
import JoinNow from "./JoinNow.tsx";
import ListOfAuthers from "./ListOfAuthers.tsx";
import Testimonials from "./Testimonials.tsx";
import WhyWeStarted from "./WhyWeStarted.tsx";
import NavBar from "../NavBar.tsx";
import Footer from "../Footer.tsx";
import { Link } from "react-router-dom";
import { RouteName, generateRoutePath } from "../../App/index.ts";
import PostListData from "../Blogs/PostListData.tsx";

const HomePage = () => {
  const { t } = useTranslation();
  const randomPostIndex = Math.floor(Math.random() * PostListData.length);
  const randomPost = PostListData[randomPostIndex];

  return (
    <>
      <NavBar />
      <div className="relative">
        <img
          className="w-full h-[845px] object-cover"
          src={menWithComputer}
          alt="Background"
        />
        <div
          className={`absolute top-1/2 lg:left-1/3 sm:left-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-md mx-auto text-white font-sans p-4 sm:p-8`}
        >
          <p className="text-base pb-3">
            {t("POSTED ON ")}
            <b>{t(randomPost.catagory)}</b>
          </p>
          <p className="pb-5 text-2xl sm:text-4xl lg:text-6xl">
            {t(randomPost.title)}
          </p>
          <p className="pb-3 text-base">
            By <strong className="text-amber-300">{randomPost.author}</strong> |
            May 23, 2022
          </p>
          <p className="pb-3 text-base">
            {t(
              "Our team is aimed at actively developing the blog, supporting and motivating our authors."
            )}
          </p>
          <Link
            to={`${generateRoutePath({ name: RouteName.Blog })}/${
              randomPost.path
            }`}
          >
            <button className="font-bold text-center  bg-amber-300 text-black md:w-1/4 w-1/2 h-14 transition duration-500 ease-in-out hover:bg-amber-400 transform hover:-translate-y-1 hover:scale-110">
              {t("Read More")} &#62;
            </button>
          </Link>
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
