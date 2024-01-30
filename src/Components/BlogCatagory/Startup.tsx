import PostListData from "../Blogs/PostListData.tsx";
import NavBar from "../NavBar.tsx";
import FilterPosts from "./FilterPosts.tsx";
import Footer from "../Footer.tsx";

const Startup = () => {
  const startupPosts = PostListData.filter(
    (post) => post.catagory === "Startup"
  );

  return (
    <>
      <NavBar />
      <FilterPosts title="Startup" posts={startupPosts} />
      <Footer />
    </>
  );
};
export default Startup;
