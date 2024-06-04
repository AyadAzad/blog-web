import { useTranslation } from "react-i18next";
import { RouteName, authors, generateRoutePath } from "../../App/routes";
import Ayad_Azad from "../../assets/Ayad_Azad.png";
import Alexandra_Rybinskaya from "../../assets/Alexandra_Rybinskaya.jpg";
import women2 from "../../assets/women2.png";
import women3 from "../../assets/women3.png";
import socialWrapper from "../../assets/SocialWrapper.png";
import logoComponents from "../../assets/LogoComponent.png";
import { Link } from "react-router-dom";

const ListOfAuthers = () => {
  const { t } = useTranslation();

  const picturesAuthors: Record<string, { img: string }> = {
    [RouteName.AyadAzad]: { img: Ayad_Azad },
    [RouteName.AlexandraRybinskaya]: { img: Alexandra_Rybinskaya },
    [RouteName.JennyWilson]: { img: women2 },
    [RouteName.LeslieAlexander]: { img: women3 },
  };

  return (
    <>
      <p className="pb-6 md:pb-11 font-bold text-xl md:text-3xl text-center pt-10 md:pt-20">
        {t("List of Authors")}
      </p>
      <div className="flex flex-col items-center justify-center md:flex-wrap xl:flex-nowrap sm:flex-col md:flex-row pb-10 md:pb-20  xl:w-10/12 xl:mx-auto">
        {authors.map((author) => (
          <Link to={generateRoutePath({ name: author.key })}>
            <div
              key={author.key}
              className={
                "bg-slate-200 mx-auto my-5 md:my-0 md:mb-5 md:mx-5 px-10 pt-10 hover:bg-amber-100 md:w-72 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"
              }
            >
              <div className="flex items-center justify-center">
                <img
                  className={
                    author.key === RouteName.AlexandraRybinskaya
                      ? "rounded-full w-32 h-32"
                      : "w-32 h-32"
                  }
                  src={picturesAuthors[author.key].img}
                  alt={author.label}
                ></img>
              </div>
              <p className="pb-3 md:pb-5 font-bold text-lg md:text-2xl text-center">
                {author.label}
              </p>
              <p className="text-slate-500 pb-6 md:pb-11 text-center">
                {author.label == "Ayad Azad" ||
                author.label == "Alexandra Rybinskaya"
                  ? "Co Founder, Developer, Content Writer"
                  : "UI / UX - Designer, QA, Content writer"}
              </p>
              <div className="pb-6 md:pb-10 flex items-center justify-center">
                <img src={socialWrapper} alt="Social"></img>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pt-6 md:pt-10 pb-6 md:pb-10 flex items-center justify-center w-3/4 ml-14 md:ml-24 xl:ml-48">
        <img src={logoComponents} alt="Logo"></img>
      </div>
    </>
  );
};

export default ListOfAuthers;
