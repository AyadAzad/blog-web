import ManInWhiteShirt
    from "../../assets/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.png";

const FeaturedPosts = () =>{
    return (
        <div className="bg-gray-100 w-full px-20 py-12 max-md:max-w-full max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
            <span className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-gray-800 text-base font-medium leading-5 tracking-[3px] uppercase self-stretch max-md:max-w-full">
                Featured Post
              </div>
              <div className="text-gray-800 text-4xl font-bold leading-10 tracking-tighter self-stretch mt-8 max-md:max-w-full">
                Step-by-step guide to choosing great font pairs
              </div>
              <div className="text-violet-800 text-sm font-medium leading-5 self-stretch mt-6 max-md:max-w-full">
                By <span className="text-violet-800">John Doe</span>
              </div>
              <div className="text-zinc-500 text-base leading-7 self-stretch mt-7 max-md:max-w-full">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </div>
              <span className="text-gray-800 text-lg font-bold leading-6 whitespace-nowrap items-stretch bg-amber-300 justify-center mt-9 px-12 py-4 self-start max-md:px-5">
                Read More &gt;
              </span>
            </span>
                </div>
                <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
                    <img
                        loading="lazy"
                        srcSet={ManInWhiteShirt}
                        className="aspect-[1.43] object-contain object-center w-full overflow-hidden my-auto max-md:max-w-full max-md:mt-10"
                    />
                </div>
            </div>
        </div>
    )

}
export default FeaturedPosts