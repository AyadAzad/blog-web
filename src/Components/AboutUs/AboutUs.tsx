import Footer from "../Footer";
import NavBar from "../NavBar";
import people from "../../assets/people2.png";
import OurMission from "./OurMission";
import OurTeam from "./OurTeam";
import ListOfAuthers from "../homePage/ListOfAuthers";
import JoinNow from "../homePage/JoinNow";

const AboutUs = () => {
  return (
    <>
      <NavBar />

      <div className="w-full flex items-center justify-center mt-20 mb-10">
        <div className="flex items-start flex-col justify-center  w-3/4">
          <div className=" bg-white ">
            <p className="text-base pb-5">ABOUT US</p>
          </div>
          <div className="flex items-start justify-between w-full">
            <p className="text-4xl font-bold max-w-96">
              We are a team of content writers who share their learnings
            </p>
            <div className=" text-base text-slate-500 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>

      <div className="pl-32 relative">
        <img className="" src={people}></img>
        <div className="absolute bottom-0 ml-20">
          <div className="bg-amber-300 flex items-center justify-center py-8">
            <div className="px-8">
              <p className="text-5xl font-bold pb-2">12+</p>
              <p>Blogs Published</p>
            </div>
            <div className="px-8">
              <p className="text-5xl font-bold pb-2">18K+</p>
              <p>Views on Finsweet</p>
            </div>
            <div className="px-8">
              <p className="text-5xl font-bold pb-2">30K+</p>
              <p>Total active Users</p>
            </div>
          </div>
          <div className=" h-6 bg-amber-300 left-1/2" />
        </div>
      </div>
      <OurMission />
      <OurTeam />
      <ListOfAuthers />
      <JoinNow />
      <Footer />
    </>
  );
};
export default AboutUs;
