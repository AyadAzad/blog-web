import { RouteName, authors, generateRoutePath } from "../../App/routes";
import Ayad_Azad from "../../assets/Ayad_Azad.png";
import Alexandra_Rybinskaya from "../../assets/Alexandra_Rybinskaya.jpg";
import women2 from "../../assets/women2.png";
import women3 from "../../assets/women3.png";
import socialWrapper from "../../assets/SocialWrapper.png";
import logoComponents from "../../assets/LogoComponent.png";
import { Link } from "react-router-dom";

const ListOfAuthers = () => {
  const picturesAuthors: Record<string, { img: string }> = {
    [RouteName.AyadAzad]: { img: Ayad_Azad },
    [RouteName.AlexandraRybinskaya]: { img: Alexandra_Rybinskaya },
    [RouteName.JennyWilson]: { img: women2 },
    [RouteName.LeslieAlexander]: { img: women3 },
  };

  return (
    <>
      <p className="pb-6 md:pb-11 font-bold text-xl md:text-3xl text-center pt-10 md:pt-20">
        List of Authors
      </p>
      <div className="flex flex-col md:flex-row pb-10 md:pb-20 w-full md:w-10/12 mx-auto">
        {authors.map((author) => (
          <div
            key={author.key}
            className={
              author.key === RouteName.AlexandraRybinskaya
                ? "bg-slate-200 mx-auto my-5 md:my-0 md:mx-5 md:px-0 px-10 pt-10 hover:bg-amber-100 md:w-72"
                : "bg-slate-200 mx-auto my-5 md:my-0 md:mx-5 px-10 pt-10 hover:bg-amber-100 md:w-72"
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
              <Link to={generateRoutePath({ name: author.key })}>
                {author.label}
              </Link>
            </p>
            <p className="text-slate-500 pb-6 md:pb-11 text-center">
              Content Writer @Company
            </p>
            <div className="pb-6 md:pb-10 flex items-center justify-center">
              <img src={socialWrapper} alt="Social"></img>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-6 md:pt-10 pb-6 md:pb-10 flex items-center justify-center w-3/4 ml-14 md:ml-48">
        <img src={logoComponents} alt="Logo"></img>
      </div>
    </>
  );
};

export default ListOfAuthers;
