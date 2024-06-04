import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import PostListData from "../Blogs/PostListData.tsx";
import NavBar from "../NavBar.tsx";
import photoOfWomen from "../../assets/photoOfWomen.png";
import MarkdownFileRenderer from "./MarkdownFileRenderer.tsx";
import WhatToReadNext from "./WhatToReadNext.tsx";
import JoinNow from "../homePage/JoinNow.tsx";
import Footer from "../Footer.tsx";
const BlogContent = () => {
  const { t } = useTranslation();
  const { path } = useParams();

  const selectedPost = PostListData.find((post) => path === post.path);

  if (!selectedPost) {
    return <div>Blog post not found</div>;
  }
  return (
    <>
      <NavBar />
      <div>
        <div className="pt-20 pl-10 lg:pl-28 flex flex-row">
          <div>
            <img src={selectedPost.author_picture} alt="Profile" width={40} />
          </div>
          <div className="px-5">
            <p className="text-2xl font-medium">{selectedPost.author}</p>
            <p className="text-slate-500 text-base">
              Posted on 27th January 2022
            </p>
          </div>
        </div>
        <p className="pt-5 pb-11 px-14 lg:px-28 md:text-6xl text-3xl w-full xl:w-3/4">
          {selectedPost.title}
        </p>
        <div className="pt-2 pb-11 px-14 lg:px-28 flex flex-row">
          <img className="w-7" src={selectedPost.icon} alt="Startap" />
          <p className="pl-5 text-2xl">{t(selectedPost.catagory)}</p>
        </div>
        <div className="flex items-center justify-center">
          <img src={photoOfWomen} alt="Photo of Women" />
        </div>
        <div className="ml-2 xl:ml-80 mt-20 xl:w-7/12 pb-20 xl:pr-10">
          <MarkdownFileRenderer filePath={selectedPost.contentPath} />
        </div>
      </div>
      <WhatToReadNext selectedPath={path} />
      <JoinNow />
      <Footer />
    </>
  );
};
export default BlogContent;
