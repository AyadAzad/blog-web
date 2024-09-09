import { useTranslation } from "react-i18next";
// import blogs from './blog_info.json'
import {useEffect, useState} from "react";


interface Blog {
    blog_link: string,
    blog_img: string;
    blog_category: string;
    blog_name: string;

}

const AllPosts = () => {
    const { t } = useTranslation();
    const [blogData, setBlogData] = useState<Blog[]>([]);
    useEffect(() =>{
       const fetchData = async () =>{
               const tech_blog = await fetch("https://ayadazad.github.io/insightblogas_api/tech_blog.json")
               const tech_data = await tech_blog.json()

               const finance_blog = await fetch("https://ayadazad.github.io/insightblogas_api/Finance_blog.json")
               const finance_data = await finance_blog.json()

               const AllData = tech_data.concat(finance_data)
               setBlogData(AllData)

       }
         fetchData()

    }, [])
    return (
        <div className="flex flex-col mt-20 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="text-gray-800 text-5xl font-bold leading-[63.84px] tracking-tighter self-stretch max-md:text-4xl">
                {t("All posts")}
            </div>
            <div className="bg-zinc-500 self-stretch h-px mt-9 max-md:max-w-full" />
            {blogData.map((post: Blog) => (
                <div key={post.blog_link} className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-8">
                                <a href={post.blog_link}>
                                    <img
                                        loading="lazy"
                                        srcSet={post.blog_img}
                                        className="aspect-[1.73] object-contain object-center w-full overflow-hidden max-md:max-w-full max-sm:max-w-full"
                                        alt={`Post ${post.blog_name}`}
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
