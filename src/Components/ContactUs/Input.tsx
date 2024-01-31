import { useTranslation } from "react-i18next";

const Input = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center pb-20">
      <div className="w-2/4">
        <input
          className="mt-2 px-7 py-5 bg-white border border-purple-700 placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1"
          placeholder={t("Full Name")}
        />
        <input
          className="mt-2 px-7 py-5 bg-white border border-purple-700 placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1"
          placeholder={t("Your Email")}
        />
        <input
          className="mt-2 px-7 py-5 bg-white border border-purple-700 placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1"
          placeholder={t("Query Related")}
        />
        <input
          className="mt-2 px-7 pt-5 pb-20 bg-white border border-purple-700 placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1"
          placeholder={t("Message")}
        />
        <button className="mt-2 font-bold pb-2 bg-amber-300 text-black w-full h-14 hover:bg-amber-400">
          {t("Send Message")}
        </button>
      </div>
    </div>
  );
};

export default Input;
