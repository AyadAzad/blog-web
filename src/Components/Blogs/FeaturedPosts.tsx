import { useTranslation } from "react-i18next";
import blog_info from "./blog_info.json";

const FeaturedPosts = () => {
  const { t } = useTranslation();


  const featuredPost = Math.floor(Math.random() * blog_info.length);
  const randomPost = blog_info[featuredPost];
  return (
    <div className="bg-gray-100 w-full px-20 py-12 max-md:max-w-full max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
          <span className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
            <div className="text-gray-800 text-base font-medium leading-5 tracking-[3px] uppercase self-stretch max-md:max-w-full">
              {t("Featured Post")}
            </div>
            <div className="text-gray-800 text-4xl font-bold leading-10 tracking-tighter self-stretch mt-8 max-md:max-w-full">
              {t(randomPost.blog_name)}
            </div>
            <div className="text-violet-800 text-sm font-medium leading-5 self-stretch mt-6 max-md:max-w-full">
               <span className="text-violet-800">{randomPost.blog_category}</span>
            </div>
            <a href={randomPost.blog_link}>
            <span className="text-gray-800 text-lg font-bold leading-6 whitespace-nowrap items-stretch bg-amber-300 justify-center mt-9 px-12 py-4 self-start max-md:px-5 transition duration-500 ease-in-out hover:bg-amber-400 transform hover:-translate-y-1 hover:scale-110">
              {t("Read More")} &gt;
            </span>
            </a>
          </span>
        </div>
        <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet={randomPost.blog_img}
            className="aspect-[1.43] object-contain object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
};
export default FeaturedPosts;
