import business from "../../assets/bussiness.png";
import economy from "../../assets/economy.png";
import technoogy from "../../assets/technology.png";
import startap from "../../assets/startap.png";

const AllCatagories = () =>{
    return (
        <span className=" flex w-full flex-col items-stretch mt-20 mb-[500px] px-20 max-md:max-w-full max-md:my-10 max-md:px-5">
        <div className="text-gray-800 text-4xl font-bold leading-10 tracking-tighter max-md:max-w-full">
          All Categories
        </div>
        <div className="mt-12 max-md:max-w-full max-md:mt-10 ">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0 hover:bg-amber-300 hover:cursor-pointer">
              <span className="border border-[color:var(--Medium-grey,#6D6E76)] flex grow flex-col w-full pl-8 pr-14 py-9 border-solid items-start max-md:mt-8 max-md:px-5">
                <div className="flex-col fill-orange-50 overflow-hidden relative flex aspect-square w-12 max-w-full justify-center items-center">
                  <img
                      loading="lazy"
                      src={business}
                      className="absolute h-full w-full object-cover object-center inset-0"
                  />
                  <img
                      loading="lazy"
                      src={economy}
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
              <span className="hover:bg-amber-300 hover:cursor-pointer flex grow flex-col w-full pl-8 pr-14 py-9 items-start max-md:mt-8 max-md:px-5">
                <img
                    loading="lazy"
                    srcSet={startap}
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
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0 hover:bg-amber-300 hover:cursor-pointer">
              <span className="border border-[color:var(--Medium-grey,#6D6E76)] flex grow flex-col w-full pl-8 pr-14 py-9 border-solid items-start max-md:mt-8 max-md:px-5">
                <img
                    loading="lazy"
                    srcSet={economy}
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
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0 hover:bg-amber-300 hover:cursor-pointer">
              <span className="border border-[color:var(--Medium-grey,#6D6E76)] flex grow flex-col w-full pl-8 pr-14 py-9 border-solid items-start max-md:mt-8 max-md:px-5">
                <img
                    loading="lazy"
                    srcSet={technoogy   }
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
    )
}
export default AllCatagories