import { useTranslation } from "react-i18next";
import Ayad_Azad from "../../assets/Ayad_Azad.png";
import Pattern from "../../assets/Pattern.png";
import Footer from "../Footer.tsx";
import NavBar from "../NavBar.tsx";
import AyadPosts from "../BlogCatagory/AyadPosts.tsx";

const AyadAzad = () => {
  const { t } = useTranslation();

  return (
    <div className="topOfPage">
      <NavBar />
      <div className="bg-white flex flex-col items-stretch pb-12">
        <div className="bg-gray-100 flex w-full flex-col items-center pt-12 px-16 max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-screen-lg flex-col items-stretch mt-24 max-md:max-w-full max-md:mt-10">
            <div className="max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                  <img
                    loading="lazy"
                    srcSet={Ayad_Azad}
                    className="aspect-[0.74] object-contain object-center w-[251px] overflow-hidden shrink-0 max-w-full grow max-md:mt-8"
                  />
                </div>
                <div className="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:ml-0">
                  <span className="flex grow flex-col mt-7 items-start max-md:max-w-full max-md:mt-10">
                    <div className="justify-center text-gray-800 text-5xl font-bold leading-[64px] tracking-tighter self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                      Hey there, I’m Ayad Azad and welcome to my Blog
                    </div>
                    <div className="justify-center text-zinc-500 text-base leading-7 self-stretch max-w-[720px] mr-5 mt-14 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
                      {t(
                        "Greetings! I am the co-founder of this blog, a place where we share our thoughts, inspiration and knowledge. Since the founding of this blog, my goal has remained unchanged - to share high-quality content that inspires, educates and entertains our readers. Here you will find a variety of articles reflecting my thoughts, experiences and research. My mission is to create a community where everyone will find something for themselves, no matter what level of knowledge or interests you have. I invite you to join our journey where we explore, learn and develop together. Welcome to the world of InsghtBlog!"
                      )}
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
          <AyadPosts />
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default AyadAzad;
