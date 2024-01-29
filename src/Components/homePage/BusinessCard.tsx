import { Link } from "react-router-dom";
import { RouteName, generateRoutePath } from "../../App/routes";

const BusinessCard = () => {
  return (
    <>
      <div className="hidden sm:block w-8/12 h-6 bg-amber-300 ml-96"></div>
      <div className="bg-purple-50 pt-8 sm:pt-32 flex flex-col sm:flex-row w-full sm:w-10/12 px-4 sm:px-32 ml-4 sm:ml-32 pb-4 sm:pb-20">
        <div className="w-full sm:w-2/4 pr-4 sm:pr-20">
          <p className="font-bold text-base pb-4 sm:pb-9">ABOUT US</p>
          <p className="pb-4 sm:pb-11 font-bold text-xl sm:text-3xl">
            We are a community of content writers who share their learnings
          </p>
          <p className="text-slate-500 pb-4 sm:pb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to={generateRoutePath({ name: RouteName.AboutUs })}>
            <button className="font-bold pb-2 text-violet-700 ">
              Read More &#62;
            </button>
          </Link>
        </div>
        <div className="w-full sm:w-2/4 pr-4 sm:pr-20">
          <p className="font-bold text-base pb-4 sm:pb-9">OUR MISSION</p>
          <p className="pb-4 sm:pb-11 font-bold text-lg sm:text-2xl">
            Creating valuable content for creatives all around the world
          </p>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
};

export default BusinessCard;
