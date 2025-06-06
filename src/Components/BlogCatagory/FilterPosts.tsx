import { useTranslation } from "react-i18next";


type TypeProps = {
  posts: { [k: string]: string }[];
  title: string;
};

const FilterPosts = ({ posts, title }: TypeProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col mt-20 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="text-gray-800 text-5xl font-bold leading-[63.84px] tracking-tighter self-stretch max-md:max-w-full max-md:text-4xl">
        {title}
      </div>
      <div className="bg-zinc-500 self-stretch shrink-0 h-px mt-9 max-md:max-w-full" />
      {posts.map((post) => (
        <div
          key={post.blog_link}
          className="self-stretch mt-16 max-md:max-w-full max-md:mt-10"
        >
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-8">
                  <a href={post.blog_link}>
                  <img
                    loading="lazy"
                    srcSet={post.blog_img}
                    className="aspect-[1.73] object-contain object-center w-full overflow-hidden max-md:max-w-full max-sm:max-w-full"
                  />
                  </a>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-violet-800 text-base font-semibold leading-5 tracking-[3px] uppercase max-md:max-w-full">
                  {t(post.blog_category)}
                </div>
                <div className="text-gray-800 text-4xl font-bold leading-10 tracking-tighter mt-8 max-md:max-w-full">
                  {post.blog_name}
                </div>
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="self-center flex justify-between gap-5 mt-20 items-start max-md:mt-10">

      </div>
    </div>
  );
};
export default FilterPosts;
