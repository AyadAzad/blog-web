import fotoOfWomenashboard from "../../assets/twoWomenInFront.png";
import photoOfPeople from "../../assets/photoOfPeople.png";
import photoOfWomen from "../../assets/photoOff-woman.png";

const WhatToReadNext = () => {
  return (
    <>
      <div className="pb-20">
        <p className="ml-5 md:ml-32 text-3xl font-bold">What to read next</p>
        <div className="ml-1 md:ml-32 pt-14 flex flex-col md:flex-row w-full md:w-10/12">
          <div className="md:mr-10 mb-10 md:mb-0">
            <img
              className="w-full md:w-auto"
              src={fotoOfWomenashboard}
              alt="Read Next 1"
            />
            <p className="pt-5 pb-5 text-base">
              By <strong className="text-amber-300">John Doe </strong>| Aug 23,
              2022
            </p>
            <p className="pb-5 text-3xl font-medium">
              A UX Case Study Creating a Studious Environment for Students:
            </p>
            <p className="text-slate-500 text-base md:mr-10">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div className="md:mr-10 mb-10 md:mb-0">
            <img
              className="w-full md:w-auto"
              src={photoOfPeople}
              alt="Read Next 2"
            />
            <p className="pt-5 pb-5 text-base">
              By <strong className="text-amber-300">John Doe </strong>| Aug 23,
              2022
            </p>
            <p className="pb-5 text-3xl font-medium">
              A UX Case Study Creating a Studious Environment for Students:
            </p>
            <p className="text-slate-500 text-base md:mr-10">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div>
            <img
              className="w-full md:w-auto"
              src={photoOfWomen}
              alt="Read Next 3"
            />
            <p className="pt-5 pb-5 text-base">
              By <strong className="text-amber-300">John Doe </strong>| Aug 23,
              2022
            </p>
            <p className="pb-5 text-3xl font-medium">
              A UX Case Study Creating a Studious Environment for Students:
            </p>
            <p className="text-slate-500 text-base md:mr-10">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatToReadNext;
