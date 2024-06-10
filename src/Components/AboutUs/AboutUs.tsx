import { useTranslation } from "react-i18next";
import Footer from "../Footer";
import NavBar from "../NavBar";
import people from "../../assets/people2.png";
import OurMission from "./OurMission";
import OurTeam from "./OurTeam";
import ListOfAuthors from "../homePage/ListOfAuthers";
import JoinNow from "../homePage/JoinNow";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <div className="w-full flex items-center justify-center mt-8 xl:mt-28 xl:px-0 px-5 mb-10  mr-2">
        <div className="flex items-start flex-col justify-center w-full xl:w-3/4">
          <div className="bg-white">
            <p className="text-base pb-3 xl:pb-5">{t("ABOUT US")}</p>
          </div>
          <div className="flex flex-col xl:flex-row items-start justify-between w-full">
            <p className="text-3xl xl:text-4xl font-bold max-w-2xl pb-4 xl:pb-0 xl:pr-32">
              {t("We are a team of content writers who share their learnings")}
            </p>
            <div className="text-base text-slate-500 max-w-md">
              {t(
                "Welcome to InsightBlog, your go-to source for creative insights, inspiration, and knowledge. We are a passionate community of content creators dedicated to sharing our experiences, learning, and stories with fellow creatives around the world."
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="pl-4 xl:pl-32 relative mr-4 xl:w-11/12">
        <img className="w-full xl:w-auto" src={people} alt="People"></img>
        <div className="absolute bottom-0 md:ml-20">
          <div className="bg-amber-300 flex items-center justify-center py-4 xl:py-8">
            <div className="px-4 xl:px-8">
              <p className="text-4xl md:text-5xl font-bold pb-2">12+</p>
              <p>{t("Blogs Published")}</p>
            </div>
            <div className="px-4 xl:px-8">
              <p className="text-4xl md:text-5xl font-bold pb-2">18K+</p>
              <p>{t("Views on Finsweet")}</p>
            </div>
            <div className="px-4 xl:px-8">
              <p className="text-4xl xl:text-5xl font-bold pb-2">30K+</p>
              <p>{t("Total active Users")}</p>
            </div>
          </div>
          <div className="h-4 xl:h-6 bg-amber-300 left-1/2" />
        </div>
      </div>
      <OurMission />
      <OurTeam />
      <ListOfAuthors />
      <JoinNow />
      <Footer />
    </>
  );
};

export default AboutUs;
