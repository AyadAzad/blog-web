import NavBar from "../NavBar.tsx";
import Footer from "../Footer.tsx";
import ManInWhiteShirt from '../../assets/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.png'
import peopleHandShake from '../../assets/photo-of-people-doing-handshakes-3183197.png'
import peopleWalking from '../../assets/photo-of-people-walking-on-hallway-3182811.png'
import womanLooking from '../../assets/photo-of-woman-looking-at-man-3183173.png'
import womanInfront from '../../assets/two-women-in-front-of-dry-erase-board-1181533.png'
const Blog = () =>{
    return (
        <>
            <NavBar/>
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
                <span className="flex w-full flex-col items-stretch mt-20 mb-[500px] px-20 max-md:max-w-full max-md:my-10 max-md:px-5">
        <div className="text-gray-800 text-4xl font-bold leading-10 tracking-tighter max-md:max-w-full">
          All Categories
        </div>
        <div className="mt-12 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <span className="border border-[color:var(--Medium-grey,#6D6E76)] flex grow flex-col w-full pl-8 pr-14 py-9 border-solid items-start max-md:mt-8 max-md:px-5">
                <div className="flex-col fill-orange-50 overflow-hidden relative flex aspect-square w-12 max-w-full justify-center items-center">
                  <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f6caa464f89441947adf7010f508de88e396385dc4e183a16249f0d3d4ce590?"
                      className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc76c88cef706c9e103e2e977919ea2953b7c65d314fb913166d04ad1cef65b7?"
                      className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>
                <div className="text-gray-800 text-3xl font-bold leading-10 tracking-tighter self-stretch mt-6">
                  Business
                </div>
                <div className="text-zinc-500 text-base leading-7 self-stretch mt-6">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <span className="bg-amber-300 flex grow flex-col w-full pl-8 pr-14 py-9 items-start max-md:mt-8 max-md:px-5">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-12 fill-orange-50 overflow-hidden max-w-full"
                />
                <div className="text-gray-800 text-3xl font-bold leading-10 tracking-tighter self-stretch mt-7">
                  Startup
                </div>
                <div className="text-zinc-500 text-base leading-7 self-stretch mt-4">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <span className="border border-[color:var(--Medium-grey,#6D6E76)] flex grow flex-col w-full pl-8 pr-14 py-9 border-solid items-start max-md:mt-8 max-md:px-5">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[0.98] object-contain object-center w-12 fill-orange-50 overflow-hidden max-w-full"
                />
                <div className="text-gray-800 text-3xl font-bold leading-10 tracking-tighter self-stretch mt-7">
                  Economy
                </div>
                <div className="text-zinc-500 text-base leading-7 self-stretch mt-4">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </div>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <span className="border border-[color:var(--Medium-grey,#6D6E76)] flex grow flex-col w-full pl-8 pr-14 py-9 border-solid items-start max-md:mt-8 max-md:px-5">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[0.96] object-contain object-center w-12 fill-orange-50 overflow-hidden max-w-full"
                />
                <div className="text-gray-800 text-3xl font-bold leading-10 tracking-tighter self-stretch mt-6">
                  Technology
                </div>
                <div className="text-zinc-500 text-base leading-7 self-stretch mt-4">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="text-gray-800 text-center text-4xl font-bold leading-10 tracking-tighter self-center max-w-[414px] mt-36 max-md:mt-10">
          Join our team to be a part of our story
        </div>
        <div className="text-zinc-500 text-center text-base leading-7 self-center max-w-[405px] mt-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </div>
        <span className="text-gray-800 text-lg font-bold leading-6 whitespace-nowrap items-stretch bg-amber-300 self-center justify-center mt-9 px-12 py-4 max-md:px-5">
          Join Now
        </span>
      </span>
            <Footer/>
        </>
    )
}
export default Blog