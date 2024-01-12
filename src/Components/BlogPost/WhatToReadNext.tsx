import fotoOfWomenashboard from "../../assets/twoWomenInFront.png";
import photoOfPeople from "../../assets/photoOfPeople.png";
import photoOfWomen from "../../assets/photoOff-woman.png";

const WhatToReadNext = () => {
  return (
    <>
      <div className="pb-20">
        <p className="ml-32 text-3xl font-bold">What to read next</p>
        <div className="ml-32 pt-14 flex flex-row w-10/12">
          <div className="mr-10">
            <img src={fotoOfWomenashboard}></img>
            <p className="pt-5 pb-5 text-base">
              By <strong className="text-amber-300">John Doe </strong>| Aug 23,
              2022
            </p>
            <p className="pb-5 text-3xl font-medium">
              A UX Case Study Creating a Studious Environment for Students:
            </p>
            <p className="text-slate-500 text-base mr-10">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div className="mr-10">
            <img src={photoOfPeople}></img>
            <p className="pt-5 pb-5 text-base">
              By <strong className="text-amber-300">John Doe </strong>| Aug 23,
              2022
            </p>
            <p className="pb-5 text-3xl font-medium">
              A UX Case Study Creating a Studious Environment for Students:
            </p>
            <p className="text-slate-500 text-base mr-10">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
          <div>
            <img src={photoOfWomen}></img>
            <p className="pt-5 pb-5 text-base">
              By <strong className="text-amber-300">John Doe </strong>| Aug 23,
              2022
            </p>
            <p className="pb-5 text-3xl font-medium">
              A UX Case Study Creating a Studious Environment for Students:
            </p>
            <p className="text-slate-500 text-base mr-10">
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
