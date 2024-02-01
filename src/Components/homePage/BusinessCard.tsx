import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { RouteName, generateRoutePath } from "../../App/routes";

const BusinessCard = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="hidden sm:block w-8/12 h-6 bg-amber-300 ml-96"></div>
      <div className="bg-purple-50 pt-8 sm:pt-32 flex flex-col sm:flex-row w-full sm:w-10/12 px-4 sm:px-32 ml-4 sm:ml-32 pb-4 sm:pb-20">
        <div className="w-full sm:w-2/4 pr-4 sm:pr-20">
          <p className="font-bold text-base pb-4 sm:pb-9">{t("ABOUT US")}</p>
          <p className="pb-4 sm:pb-11 font-bold text-xl sm:text-3xl">
            {t(
              "We are a community of content writers who share their learnings"
            )}
          </p>
          <p className="text-slate-500 pb-4 sm:pb-11">
            {t(
              "At InsightBlog, we believe in the power of storytelling and its ability to connect people, inspire change, and foster creativity. Whether you're an aspiring artist, designer, writer, or anyone with a passion for creativity, you'll find a home here to explore learn, and grow."
            )}
          </p>
          <Link to={generateRoutePath({ name: RouteName.AboutUs })}>
            <button className="font-bold pb-2 text-violet-700 ">
              {t("Read More")} &#62;
            </button>
          </Link>
        </div>
        <div className="w-full sm:w-2/4 pr-4 sm:pr-20">
          <p className="font-bold text-base pb-4 sm:pb-9">{t("OUR MISSION")}</p>
          <p className="pb-4 sm:pb-11 font-bold text-lg sm:text-2xl">
            {t("Creating valuable content for creatives all around the world")}
          </p>
          <p className="text-slate-500">
            {t(
              "Our mission is to curate valuable content, share insightful tips and tutorials, and create a supportive community for like-minded individuals. We aim to be a platform where creativity knows no bounds, and everyone is encouraged to express their unique voice."
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default BusinessCard;
