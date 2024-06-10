import { useTranslation } from "react-i18next";

import { useEffect, useState } from 'react';
import axios from "axios";


const AllPosts = () => {
  const { t } = useTranslation();

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://blog-api-d5p4.onrender.com/')
            .then(response => {
                setBlogs(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);


  return (
    <div className="flex w-full flex-col mt-20 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="text-gray-800 text-5xl font-bold leading-[63.84px] tracking-tighter self-stretch max-md:max-w-full max-md:text-4xl">
        {t("All posts")}
      </div>
      <div className="bg-zinc-500 self-stretch shrink-0 h-px mt-9 max-md:max-w-full" />
      {blogs.map((post) => (
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
                    // alt={`Post ${post.title}`}
                  />
                  </a>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-violet-800 text-base font-semibold leading-5 tracking-[3px] uppercase max-md:max-w-full">
                  {post.blog_category}
                </div>
                <div className="text-gray-800 text-4xl font-bold leading-10 tracking-tighter mt-8 max-md:max-w-full">
                  {post.blog_name}
                </div>
                <div className="text-zinc-500 text-base leading-7 mt-7 max-md:max-w-full">
                  {post.text}
                </div>
              </span>
            </div>
          </div>
        </div>
      ))}
      <div className="self-center flex justify-between gap-5 mt-20 items-start max-md:mt-10">
        <div className="text-zinc-500 text-center text-2xl font-bold leading-8">
          &lt; Prev
        </div>
        <div className="text-gray-800 text-center text-3xl font-bold leading-10 tracking-tighter self-stretch">
          Next &gt;
        </div>
      </div>
    </div>
  );
};
export default AllPosts;
