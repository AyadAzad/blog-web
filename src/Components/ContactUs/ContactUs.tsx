import { useTranslation } from "react-i18next";
import Footer from "../Footer";
import NavBar from "../NavBar";
import BusinessCard from "./BusinessCard";
import Input from "./Input";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavBar />
      <div className="text-center pt-32 pb-24">
        <p className="font-bold text-1xl">{t("CONTACT US")}</p>
        <p className="font-bold text-5xl">{t("Let’s Start a Conversation")}</p>
        <p className="flex justify-center items-center ">
          <p className="text-slate-500 pt-5 w-2/4">
            {t(
              "If you're a developer or a content writer and want to join us, or if you have a query or comment about the website you send us a message through this form."
            )}
          </p>
        </p>
      </div>
      <BusinessCard />
      <Input />
      <Footer />
    </>
  );
};
export default ContactUs;
