import { useTranslation } from "react-i18next";
import AlexandraRybinskay from "../../assets/Alexandra_Rybinskaya.jpg";
import Pattern from "../../assets/Pattern.png";
import Footer from "../Footer.tsx";
import NavBar from "../NavBar.tsx";
import SashaPosts from "../BlogCatagory/SashaPosts.tsx";

const AlexandraRybinskaya = () => {
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
                    src={AlexandraRybinskay}
                    className="rounded-full mt-10 md:w-full w-2/4 ml-5"
                  />
                </div>
                <div className="flex flex-col items-stretch w-9/12 ml-5 max-md:w-full max-md:ml-0">
                  <span className="flex grow flex-col mt-7 items-start max-md:max-w-full max-md:mt-10">
                    <div className="justify-center text-gray-800 text-5xl font-bold leading-[64px] tracking-tighter self-stretch max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                      Hey there, I’m Alexandra Rybinskaya and welcome to my Blog
                    </div>
                    <div className="justify-center text-zinc-500 text-base leading-7 self-stretch max-w-[720px] mr-5 mt-14 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
                      {t(
                        "Welcome to my world of creativity and research! My name is Alexandra Rybinskaya, and I am the co-founder of this blog. Here I share my thoughts, ideas and discoveries. My blog is not only a place where I share my stories, but also an invitation to discussion and inspiration. Here you will find articles that shed light on various aspects, as well as reflections on life, creativity and development. My goal is to inspire you with new ideas, help you grow and develop, and create a community of like-minded people where everyone can find inspiration and support. Join me on this exciting journey! Thank you for making this journey with me."
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
        <span className="self-center flex w-full max-w-screen-lg flex-col items-stretch  px-5 max-md:max-w-full max-md:my-10">
          <SashaPosts />
        </span>
      </div>
      <Footer />
    </>
  );
};

export default AlexandraRybinskaya;
