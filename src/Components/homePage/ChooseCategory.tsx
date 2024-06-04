import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { chooseCategory, generateRoutePath } from "../../App/routes";
import { RouteName } from "../../App/routes";
import business from "../../assets/bussiness.png";
import economy from "../../assets/economy.png";
import technoogy from "../../assets/technology.png";

const ChooseCategory = () => {
  const { t } = useTranslation();

  const iconChooseCategory: Record<string, { img: string }> = {
    [RouteName.Business]: { img: business },
    [RouteName.Startup]: { img: technoogy },
    [RouteName.Technology]: { img: technoogy },
    [RouteName.Economy]: { img: economy },
  };
  return (
    <>
      <p className="pb-6 xl:pb-11 font-bold text-xl xl:text-3xl pt-4 xl:pt-32 text-center">
        {t("Choose A Category")}
      </p>
      <div className="flex flex-col items-center justify-center md:flex-row xl:flex-nowrap sm:flex-wrap pb-4 md:pb-20 xl:w-10/12 md:w-full xl:ml-32 ">
        {chooseCategory.map((item) => (
          <div
            key={item.key}
            className="border-2 border-solid border-slate-300 mx-5 my-5 px-4 pt-4 sm:hover:bg-amber-300 transition duration-500 ease-in-out hover:bg-amber-400 transform hover:-translate-y-1 hover:scale-110"
          >
            <Link to={`${generateRoutePath({ name: item.key })}`}>
              <img
                src={iconChooseCategory[item.key].img}
                alt={item.label}
              ></img>
              <p className="pt-2 pb-5 font-bold text-lg xl:text-2xl">
                {t(item.label)}
              </p>
              <p className="text-slate-500 pb-4 xl:pb-11">
                {t("Here you can read the articles of the authors")}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChooseCategory;
