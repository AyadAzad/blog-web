import { useTranslation } from "react-i18next";
import people from "../../assets/people.png";

const WhyWeStarted = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full md:w-10/12 ml-auto mr-auto md:ml-32 md:mr-32 pt-8 md:pt-20 pb-10 md:pb-20 mb-60 md:mb-10">
      <div className="relative w-full lg:w-full md:w-2/3 mx-auto md:mx-0">
        <img src={people} />
        <div className="absolute bg-white pl-10 left-14 right-0 md:left-1/3 md:right-40 md:pl-20 pt-20 md:bottom-0 bottom-0 h-5/6">
          <p className="top-52 text-base pb-4 md:pb-11">
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
          <button className="font-bold pb-2 bg-amber-300 text-black w-52 h-14">
            {t("Discover our story")} &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyWeStarted;
