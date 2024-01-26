import { useParams } from "react-router-dom";
import PostListData from "../Blogs/PostListData.tsx";
import NavBar from "../NavBar.tsx";
import profilePicture from "../../assets/ProfilePicture.png";
import startap from "../../assets/startap.png";
import photoOfWomen from "../../assets/photoOfWomen.png";
import MarkdownFileRenderer from "./MarkdownFileRenderer.tsx";
import WhatToReadNext from "./WhatToReadNext.tsx";
import JoinNow from "../homePage/JoinNow.tsx";
import Footer from "../Footer.tsx";

const BlogContent = () => {
  const { path } = useParams();
  const selectedPost = PostListData.find((post) => path === post.path);

  if (!selectedPost) {
    return <div>Blog post not found</div>;
  }
  return (
    <>
      <NavBar />
      <div className="md:ml-auto">
        <div className="pt-20 pl-28 flex flex-row">
          <div>
            <img src={profilePicture} alt="Profile" />
          </div>
          <div className="px-5">
            <p className="text-2xl font-medium">Jonathan Vallem</p>
            <p className="text-slate-500 text-base">
              Posted on 27th January 2022
            </p>
          </div>
        </div>
        <p className="pt-5 pb-11 px-28 md:text-6xl text-3xl w-3/4">
          {selectedPost.title}
        </p>
        <div className="pt-2 pb-11 px-28 flex flex-row">
          <img className="w-7" src={startap} alt="Startap" />
          <p className="pl-5 text-2xl">{selectedPost.catagory}</p>
        </div>
        <div className="flex items-center justify-center">
          <img src={photoOfWomen} alt="Photo of Women" />
        </div>
        <div className="ml-2 md:ml-80 mt-20 md:w-7/12 pb-20 md:pr-10">
          <MarkdownFileRenderer filePath={selectedPost.contentPath} />
        </div>
      </div>

      <WhatToReadNext />
      <JoinNow />
      <Footer />
    </>
  );
};
export default BlogContent;
