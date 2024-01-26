import { Link } from "react-router-dom";
import { generateRoutePath } from "../../App/routes";
import { RouteName } from "../../App/routes";
import PostListData from "../Blogs/PostListData";
import economy from "../../assets/economy.png";
import technoogy from "../../assets/technology.png";

const ChooseCategory = () => {
  return (
    <>
      <p className="pb-6 sm:pb-11 font-bold text-xl sm:text-3xl pt-4 sm:pt-32 text-center">
        Choose A Category
      </p>
      <div className="flex flex-col sm:flex-row pb-4 sm:pb-20 w-full sm:w-10/12 ml-4 sm:ml-32">
        {PostListData.map((item) => (
          <div
            key={item.path}
            className="border-2 border-solid border-slate-300 mx-5 my-5 px-4 pt-4 sm:hover:bg-amber-300"
          >
            <Link
              to={`${generateRoutePath({ name: RouteName.Blog })}/${item.path}`}
            >
              <img src={item.icon} alt={item.catagory}></img>
              <p className="pt-2 pb-5 font-bold text-lg sm:text-2xl">
                {item.catagory}
              </p>
              <p className="text-slate-500 pb-4 sm:pb-11">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Link>
          </div>
        ))}
        {/* the code below this comment should be added as an object to the array PostListData  */}
        <div className="border-2 border-solid border-slate-300 mx-5 my-5 px-4 pt-4 sm:hover:bg-amber-300">
          <img src={economy} alt="Economy"></img>
          <p className="pt-2 pb-5 font-bold text-lg sm:text-2xl">Economy</p>
          <p className="text-slate-500 pb-4 sm:pb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="border-2 border-solid border-slate-300 mx-5 my-5 px-4 pt-4 sm:hover:bg-amber-300">
          <img src={technoogy} alt="Startup"></img>
          <p className="pt-2 pb-5 font-bold text-lg sm:text-2xl">Technology</p>
          <p className="text-slate-500 pb-4 sm:pb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </>
  );
};

export default ChooseCategory;
