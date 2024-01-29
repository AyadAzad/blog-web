import { Link } from "react-router-dom";
import PostListData from "../Blogs/PostListData";
import { generateRoutePath } from "../../App/routes";
import { RouteName } from "../../App/routes";

const FuturePosts = () => {
  const technologyPost = PostListData.find(
    (post) => post.catagory === "Technology"
  );

  return (
    <div className="pt-8 sm:pt-32 flex flex-col sm:flex-row px-4 sm:px-32 pb-4 sm:pb-20">
      <div className="mb-8 sm:mb-0">
        <p className="text-xl sm:text-3xl font-bold pb-4 sm:pb-11">
          Featured post
        </p>
        <div>
          <img
            className="w-full sm:w-3/4 pb-4 sm:pb-11 cursor-pointer"
            src={technologyPost?.picture}
            alt="Featured Post"
          />
          <p className="pb-4 sm:pb-11 text-base">
            By <strong className="text-indigo-700">John Deo</strong> | May 23,
            2022
          </p>
          <p className="pb-4 sm:pb-11 font-bold text-xl sm:text-3xl w-full sm:w-3/4">
            {technologyPost?.title}
          </p>
          <p className="pb-4 sm:pb-11 text-xl sm:text-1xl w-full sm:w-3/4">
            React JS has become one of the most popular JavaScript libraries for
            building user interfaces. Its component-based architecture and
            efficient data binding make it a go-to choice for developers when
            creating modern web applications.
          </p>
          <Link
            to={`${generateRoutePath({ name: RouteName.Blog })}/${
              technologyPost?.path
            }`}
          >
            <button className="font-bold pb-2 bg-amber-300 text-black w-full sm:w-52 h-14 cursor-pointer">
              Read More &#62;
            </button>
          </Link>
        </div>
      </div>
      <div>
        <p className="text-xl sm:text-2xl font-bold pb-4 sm:pb-11">All post</p>
        <div className=" text-base">
          {PostListData.map((item) => (
            <div key={item.path} className="mb-4 sm:mb-20 hover:bg-amber-100">
              <p>
                By <strong className="text-indigo-700">John Deo </strong>| May
                23, 2022
              </p>
              <p className="text-xl sm:text-2xl font-bold">
                <Link
                  to={`${generateRoutePath({ name: RouteName.Blog })}/${
                    item.path
                  }`}
                >
                  {item.title}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FuturePosts;
