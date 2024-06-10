import { useTranslation } from "react-i18next";
import profilePicture from "../../assets/ProfilePicture.png";
import arrow from "../../assets/arrow.png";
import arrow2 from "../../assets/arrrow2.png";

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="mt-10 xl:mt-20 pl-6 xl:ml-32 w-full xl:w-10/12 bg-amber-50 grid grid-cols-1 xl:grid-cols-2 xl:divide-x-2 py-16">
        <div className="w-full xl:pl-32 xl:pr-40">
          <p className="text-1xl font-medium pb-5">{t("TESTIMONIALS")}</p>
          <p className="pb-5 font-bold text-4xl">
            {t("What people say about our blog")}
          </p>
          <p>{t("Here you can read the reviews of our users.")}</p>
        </div>

        <div className="w-full xl:pl-14 xl:pr-40 flex flex-col justify-center items-start gap-16 xl:gap-32">
          <p className="text-xl xl:text-2xl font-medium">
            {t(
              "Excellent site, a lot of useful and varied information, I recommend it"
            )}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex flex-row items-center md:items-start">
              <div className="pr-4 xl:pr-5">
                <img src={profilePicture} alt="Profile" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-medium">
                  Jonathan Vallem
                </p>
                <p className="text-slate-500 text-base md:text-lg">
                  New York, USA
                </p>
              </div>
            </div>
            <div className="flex flex-row mt-4 md:mt-0">
              <div className="px-2 xl:px-4 animate-bounce">
                <img src={arrow} alt="Arrow 1" />
              </div>
              <div className="animate-bounce">
                <img src={arrow2} alt="Arrow 2 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
