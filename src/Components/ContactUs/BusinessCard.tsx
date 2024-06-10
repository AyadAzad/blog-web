import { useTranslation } from "react-i18next";

const BusinessCard = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center pb-11">
      <div className="bg-purple-700 lg:w-2/4 w-full flex md:flex-row flex-col lg:mx-0 mx-5 md:px-24 lg:px-14 px-5 py-14">
        <div className="text-slate-200 pr-14">
          <p className="pb-3">{t("Working hours")}</p>
          <hr className="pt-3 w-full"></hr>
          <p className="text-white font-bold text-2xl">
            {t("Monday To Friday")}
          </p>
          <p className="text-white font-bold text-2xl">
            {t("9:00 AM to 8:00 PM")}
          </p>
          <p>{t("Our Support Team is available 24/7")}</p>
        </div>
        <div className="text-slate-200">
          <p className="pb-3">{t("Contact Us")}</p>
          <hr className="pt-3"></hr>
          <p className="text-white font-bold text-2xl">+964 750 149 1512</p>
          <p>ayad.azad77@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
