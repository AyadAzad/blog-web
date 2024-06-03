import { useTranslation } from "react-i18next";
import people from "../../assets/people.png";
import { Link } from "react-router-dom";
import { generateRoutePath } from "../../App/routes";
import { RouteName } from "../../App/routes";

const WhyWeStarted = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full xl:w-10/12 ml-auto mr-auto xl:ml-32 xl:mr-32 pt-8 xl:pt-20 pb-10 xl:pb-20 mb-60 xl:mb-10">
      <div className="relative w-full  ">
        <img src={people} />
        <div className="absolute bg-white pl-10 left-14 right-0 xl:left-1/3 xl:right-40 xl:pl-20 pt-20 xl:bottom-0 bottom-0 h-5/6">
          <p className="top-52 text-base pb-4 xl:pb-11">
            {t("WHY WE STARTED")}{" "}
          </p>
          <p className="pb-4 md:pb-11 font-bold text-4xl md:text-5xl">
            {t("It started out as a simple idea and evolved into our passion")}
          </p>
          <p className="pb-4 md:pb-11 text-base md:text-slate-500">
            {t(
              "The launch of this blog was an opportunity for us to create a community of like-minded people where people from different fields of creativity can share experiences, support each other and discover amazing perspectives of the creative process together."
            )}
          </p>
          <Link to={generateRoutePath({ name: RouteName.AboutUs })}>
            <button className="font-bold text-center bg-amber-300 mb-5 md:mb-0 text-black w-52 h-14 transition duration-500 ease-in-out hover:bg-amber-400 transform hover:-translate-y-1 hover:scale-110">
              {t("Discover our story")} &#62;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyWeStarted;
