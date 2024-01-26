import PostListData from "../Blogs/PostListData.tsx";
import NavBar from "../NavBar.tsx";
import FilterPosts from "./FilterPosts.tsx";
import Footer from "../Footer.tsx";

const Business = () => {
  const businessPosts = PostListData.filter(
    (post) => post.catagory === "Business"
  );

  return (
    <>
      <NavBar />
      <FilterPosts title="Business" posts={businessPosts} />
      <Footer />
    </>
  );
};
export default Business;
