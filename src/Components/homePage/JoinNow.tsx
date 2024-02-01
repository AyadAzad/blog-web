import { useTranslation } from "react-i18next";

const JoinNow = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full md:w-3/12">
        <div className="w-full pt-10 text-center pb-20">
          <p className="pb-11 font-bold text-3xl text-center md:pt-20">
            {t("Join our team to be a part of our story")}
          </p>
          <p className="text-slate-500 pb-11">
            {t(
              "Feel free to connect with us on social media, share your thoughts, and let's create something extraordinary together!"
            )}
          </p>
          <button className="font-bold pb-2 bg-amber-300 text-black w-52 h-14">
            {t("Join Now")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
