import { useTranslation } from "react-i18next";
import Jenny_Wilson from "../../assets/women2.png";
import ManInBlack from "../../assets/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.png";
import StainedGlass from "../../assets/stained-glass-high-rise-building-1106476.png";
import Pattern from "../../assets/Pattern.png";
import Footer from "../Footer.tsx";
import NavBar from "../NavBar.tsx";
const JennyWilson = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavBar />
      <div className="bg-white flex flex-col items-stretch pb-12">
        <div className="bg-gray-100 flex w-full flex-col items-center pt-12 px-16 max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-screen-lg flex-col items-stretch mt-24 max-md:max-w-full max-md:mt-10">
            <div className="max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                  <img
                    loading="lazy"
                    src={Jenny_Wilson}
                    className="aspect-[0.74] object-contain object-center w-[251px] overflow-hidden shrink-0 max-w-full grow max-md:mt-8 rounded-full  h-32"
                  />
                </div>
                <div className="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:ml-0">
                  <span className="flex grow flex-col mt-7 items-start max-md:max-w-full max-md:mt-10">
                    <div className="justify-center text-gray-800 text-5xl font-bold leading-[64px] tracking-tighter self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                      Hey there, I’m Jenny Wilson and welcome to my Blog
                    </div>
                    <div className="justify-center text-zinc-500 text-base leading-7 self-stretch max-w-[720px] mr-5 mt-14 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
                      {t(
                        "Hello! My name is Jenny Wilson, and I am the author of this content. In this corner of the Internet, I share my thoughts, ideas and life stories. My content is a place where I turn my thoughts into words, and words into stories. Here you will find reflections on life, book reviews, travel and much more.I believe that words can inspire, comfort and unite. My goal is to create a place where everyone can find something that will make you think or give you a smile.Thanks for stopping by. I hope you will find something interesting and inspiring here. Welcome!"
                      )}
                      tellus.
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src={Pattern}
              className="aspect-[37.93] object-contain object-center w-full overflow-hidden self-center mt-28 max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
        <span className="self-center flex w-full max-w-screen-lg flex-col items-stretch mt-36 mb-[500px] px-5 max-md:max-w-full max-md:my-10">
          <div className="text-gray-800 text-5xl font-bold leading-[63.84px] tracking-tighter max-md:max-w-full max-md:text-4xl">
            My Posts
          </div>
          <div className="mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-stretch max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet={ManInBlack}
                    className="aspect-[1.29] object-contain object-center w-full overflow-hidden"
                  />
                  <img
                    loading="lazy"
                    srcSet={StainedGlass}
                    className="aspect-[1.29] object-contain object-center w-full overflow-hidden mt-16 max-md:mt-10"
                  />
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
                <span className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                  <div className="text-violet-800 text-base font-semibold leading-5 tracking-[3px] uppercase max-md:max-w-full">
                    BUSINESS
                  </div>
                  <div className="text-gray-800 text-4xl font-bold leading-10 tracking-tighter mt-8 max-md:max-w-full">
                    Font sizes in UI design: The complete guide to follow
                  </div>
                  <div className="text-zinc-500 text-base leading-7 mt-7 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                  <div className="text-violet-800 text-base font-semibold leading-5 tracking-[3px] uppercase mt-48 max-md:max-w-full max-md:mt-10">
                    ECONOMY
                  </div>
                  <div className="text-gray-800 text-4xl font-bold leading-10 tracking-tighter mt-8 max-md:max-w-full">
                    How to build rapport with your web design clients
                  </div>
                  <div className="text-zinc-500 text-base leading-7 mt-7 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                </span>
              </div>
            </div>
          </div>
        </span>
      </div>
      <Footer />
    </>
  );
};

export default JennyWilson;
