import peopleHandShake from "../../assets/photo-of-people-doing-handshakes-3183197.png";
import womanLooking from "../../assets/photo-of-woman-looking-at-man-3183173.png";
import peopleWalking from "../../assets/photo-of-people-walking-on-hallway-3182811.png";
import womanInfront from "../../assets/two-women-in-front-of-dry-erase-board-1181533.png";

const AllPosts = () =>{
    return (
        <span className="flex w-full flex-col mt-20 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="text-gray-800 text-5xl font-bold leading-[63.84px] tracking-tighter self-stretch max-md:max-w-full max-md:text-4xl">
          All posts
        </div>
        <div className="bg-zinc-500 self-stretch shrink-0 h-px mt-9 max-md:max-w-full" />
        <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-8">
                <img
                    loading="lazy"
                    srcSet={peopleHandShake}
                    className="aspect-[1.73] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                />
                <img
                    loading="lazy"
                    srcSet={womanLooking}
                    className="aspect-[1.73] object-contain object-center w-full overflow-hidden mt-16 max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-violet-800 text-base font-semibold leading-5 tracking-[3px] uppercase max-md:max-w-full">
                  Startup
                </div>
                <div className="text-gray-800 text-4xl font-bold leading-10 tracking-tighter mt-8 max-md:max-w-full">
                  Design tips for designers that cover everything you need
                </div>
                <div className="text-zinc-500 text-base leading-7 mt-7 max-md:max-w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </div>
                <div className="text-violet-800 text-base font-semibold leading-5 tracking-[3px] uppercase mt-44 max-md:max-w-full max-md:mt-10">
                  BUSINESS
                </div>
                <div className="text-gray-800 text-4xl font-bold leading-10 tracking-tighter mt-8 max-md:max-w-full">
                  How to build rapport with your web design clients
                </div>
                <div className="text-zinc-500 text-base leading-7 mt-7 max-md:max-w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
              <img
                  loading="lazy"
                  srcSet={peopleWalking}
                  className="aspect-[1.54] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-8"
              />
            </div>
            <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-violet-800 text-base font-semibold leading-5 tracking-[3px] uppercase max-md:max-w-full">
                  Startup
                </div>
                <div className="text-gray-800 text-4xl font-bold leading-10 tracking-tighter mt-8 max-md:max-w-full">
                  Logo design trends to avoid in 2022
                </div>
                <div className="text-zinc-500 text-base leading-7 mt-7 max-md:max-w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
              <img
                  loading="lazy"
                  srcSet={womanLooking}
                  className="aspect-[1.54] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-8"
              />
            </div>
            <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-violet-800 text-base font-semibold leading-5 tracking-[3px] uppercase max-md:max-w-full">
                  TECHNOLOGY
                </div>
                <div className="text-gray-800 text-4xl font-bold leading-10 tracking-tighter mt-8 max-md:max-w-full">
                  8 Figma design systems you can download for free today
                </div>
                <div className="text-zinc-500 text-base leading-7 mt-7 max-md:max-w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
              <img
                  loading="lazy"
                  srcSet={womanInfront}
                  className="aspect-[1.54] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-8"
              />
            </div>
            <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-violet-800 text-base font-semibold leading-5 tracking-[3px] uppercase max-md:max-w-full">
                  ECONOMY
                </div>
                <div className="text-gray-800 text-4xl font-bold leading-10 tracking-tighter mt-8 max-md:max-w-full">
                  Font sizes in UI design: The complete guide to follow
                </div>
                <div className="text-zinc-500 text-base leading-7 mt-7 max-md:max-w-full">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </div>
              </span>
            </div>
          </div>
        </div>
        <span className="self-center flex justify-between gap-5 mt-20 items-start max-md:mt-10">
          <div className="text-zinc-500 text-center text-2xl font-bold leading-8">
            &lt; Prev{" "}
          </div>
          <div className="text-gray-800 text-center text-3xl font-bold leading-10 tracking-tighter self-stretch">
            Next &gt;
          </div>
        </span>
      </span>
    )
}
export default AllPosts