import PostListData from "../Blogs/PostListData.tsx";
import NavBar from "../NavBar.tsx";
import FilterPosts from "./FilterPosts.tsx";
import Footer from "../Footer.tsx";

const Economy = () => {
  const economyPosts = PostListData.filter(
    (post) => post.catagory === "Economy"
  );

  return (
    <>
      <NavBar />
      <FilterPosts title="Economy" posts={economyPosts} />
      <Footer />
    </>
  );
};
export default Economy;
