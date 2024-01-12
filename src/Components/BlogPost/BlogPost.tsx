import NavBar from "../NavBar";
import profilePicture from "../../assets/ProfilePicture.png";
import startap from "../../assets/startap.png";
import photoOfWomen from "../../assets/photoOfWomen.png";
import Text from "./Text";
import WhatToReadNext from "./WhatToReadNext";
import JoinNow from "../homePage/JoinNow";

const BlogPost = () => {
  return (
    <>
      <NavBar />
      <div className="ml-80">
        <div className="pt-20 flex flex-row">
          <div>
            <img src={profilePicture}></img>
          </div>
          <div className="px-5">
            <p className="text-2xl font-medium">Jonathan Vallem</p>
            <p className="text-slate-500 text-base">
              Posted on 27th January 2022
            </p>
          </div>
        </div>
        <p className="pt-5 pb-11 text-6xl w-3/4">
          Step-by-step guide to choosing great font pairs
        </p>
        <div className="pt-2 pb-11 flex flex-row">
          <img className="w-7" src={startap}></img>
          <p className="pl-5 text-2xl">Startup</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={photoOfWomen}></img>
      </div>
      <Text />
      <WhatToReadNext />
      <JoinNow />
    </>
  );
};

export default BlogPost;
