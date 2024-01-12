import business from "../../assets/bussiness.png";
import economy from "../../assets/economy.png";
import technoogy from "../../assets/technology.png";
import startap from "../../assets/startap.png";
import JoinNow from "../homePage/JoinNow";

const AllCatagories = () => {
  return (
    <>
      <p className="ml-20 pb-11 font-bold text-3xl pt-32 w-10/12">
        All Catagories
      </p>
      <div className="flex flex-row pb-20 ml-10 mr-10">
        <div className="border-2 border-solid border-slate-300 mx-10 my-5 px-4 pt-4 hover:bg-amber-300">
          <img src={business}></img>
          <p className="pb-5 font-bold text-2xl">Business</p>
          <p className="text-slate-500 pb-11">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div className="border-2 border-solid border-slate-300 mx-10 my-5 px-4 pt-4 hover:bg-amber-300">
          <a href="/blogPost">
            <img className="pt-4" src={startap}></img>
            <p className="pt-2 pb-5 font-bold text-2xl">Startup</p>
            <p className="text-slate-500 pb-11">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
          </a>
        </div>
        <div className="border-2 border-solid border-slate-300 mx-10 my-5 px-4 pt-4 hover:bg-amber-300">
          <img src={economy}></img>
          <p className="pb-5 font-bold text-2xl">Economy</p>
          <p className="text-slate-500 pb-11">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div className="border-2 border-solid border-slate-300 mx-10 my-5 px-4 pt-4 hover:bg-amber-300">
          <img src={technoogy}></img>
          <p className="pb-5 font-bold text-2xl">Technology</p>
          <p className="text-slate-500 pb-11">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
      </div>
      <JoinNow />
    </>
  );
};
export default AllCatagories;
