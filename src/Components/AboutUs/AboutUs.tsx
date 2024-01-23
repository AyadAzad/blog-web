import Footer from "../Footer";
import NavBar from "../NavBar";
import people from "../../assets/people2.png";
import OurMission from "./OurMission";
import OurTeam from "./OurTeam";
import ListOfAuthors from "../homePage/ListOfAuthers";
import JoinNow from "../homePage/JoinNow";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="w-full flex items-center justify-center mt-8 md:mt-20 mb-10 ml-2 mr-2">
        <div className="flex items-start flex-col justify-center w-full md:w-3/4">
          <div className="bg-white">
            <p className="text-base pb-3 md:pb-5">ABOUT US</p>
          </div>
          <div className="flex flex-col md:flex-row items-start justify-between w-full">
            <p className="text-3xl md:text-4xl font-bold max-w-2xl pb-4 md:pb-0 md:pr-32">
              We are a team of content writers who share their learnings
            </p>
            <div className="text-base text-slate-500 max-w-md">
              Welcome to InsightBlog, your go-to source for creative insights,
              inspiration, and knowledge. We are a passionate community of
              content creators dedicated to sharing our experiences, learning,
              and stories with fellow creatives around the world.
            </div>
          </div>
        </div>
      </div>

      <div className="pl-4 md:pl-32 relative mr-4 md:w-11/12">
        <img className="w-full md:w-auto" src={people} alt="People"></img>
        <div className="absolute bottom-0 md:ml-20">
          <div className="bg-amber-300 flex items-center justify-center py-4 md:py-8">
            <div className="px-4 md:px-8">
              <p className="text-4xl md:text-5xl font-bold pb-2">12+</p>
              <p>Blogs Published</p>
            </div>
            <div className="px-4 md:px-8">
              <p className="text-4xl md:text-5xl font-bold pb-2">18K+</p>
              <p>Views on Finsweet</p>
            </div>
            <div className="px-4 md:px-8">
              <p className="text-4xl md:text-5xl font-bold pb-2">30K+</p>
              <p>Total active Users</p>
            </div>
          </div>
          <div className="h-4 md:h-6 bg-amber-300 left-1/2" />
        </div>
      </div>
      <OurMission />
      <OurTeam />
      <ListOfAuthors />
      <JoinNow />
      <Footer />
    </>
  );
};

export default AboutUs;
