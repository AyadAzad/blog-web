import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PostListData from "../Blogs/PostListData";
import { generateRoutePath } from "../../App/routes";
import { RouteName } from "../../App/routes";

const FuturePosts = () => {
  const { t } = useTranslation();

  const featuredPost = Math.floor(Math.random() * PostListData.length);
  const randomPost = PostListData[featuredPost];

  return (
    <div className="pt-8 xl:pt-32 flex flex-col xl:flex-row px-4 xl:px-32 pb-4 xl:pb-20">
      <div className="mb-8 xlsm:mb-0">
        <p className="text-xl xl:text-3xl font-bold pb-4 xl:pb-11">
          {t("Featured post")}
        </p>
        <div>
          <img
            className="w-full xl:w-3/4 pb-4 sm:pb-11 cursor-pointer"
            src={randomPost.picture}
            alt="Featured Post"
          />
          <p className="pb-4 xl:pb-11 text-base">
            By <strong className="text-indigo-700">{randomPost.author}</strong>{" "}
            | May 23, 2022
          </p>
          <p className="pb-4 xl:pb-11 font-bold text-xl xl:text-3xl w-full xl:w-3/4">
            {randomPost.title}
          </p>
          <p className="pb-4 xl:pb-11 text-xl xl:text-1xl w-full xl:w-3/4">
            {randomPost.text}
          </p>
          <Link
            to={`${generateRoutePath({ name: RouteName.Blog })}/${
              randomPost.path
            }`}
          >
            <button className="font-bold text-center bg-amber-300 text-black w-full xl:w-52 h-14 cursor-pointer transition duration-500 ease-in-out hover:bg-amber-400 transform hover:-translate-y-1 hover:scale-110">
              {t("Read More")} &#62;
            </button>
          </Link>
        </div>
      </div>
      <div>
        <p className="text-xl xl:text-2xl font-bold pb-4 xl:pb-11">
          {t("All posts")}
        </p>
        <div className=" text-base">
          {PostListData.map((item) => (
            <div key={item.path} className="mb-4 xl:mb-20 hover:bg-amber-100">
              <p>
                By <strong className="text-indigo-700">{item.author} </strong>|
                May 23, 2022
              </p>
              <p className="text-xl xl:text-2xl font-bold">
                <Link
                  to={`${generateRoutePath({ name: RouteName.Blog })}/${
                    item.path
                  }`}
                >
                  {item.title}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FuturePosts;
