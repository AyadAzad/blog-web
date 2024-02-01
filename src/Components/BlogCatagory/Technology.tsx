import { useTranslation } from "react-i18next";
import FilterPosts from "./FilterPosts.tsx";
import PostListData from "../Blogs/PostListData.tsx";
import NavBar from "../NavBar.tsx";
import Footer from "../Footer.tsx";

const Technology = () => {
  const { t } = useTranslation();

  const technologyPosts = PostListData.filter(
    (post) => post.catagory === "Technology"
  );
  return (
    <>
      <NavBar />
      <FilterPosts title={t("Technology")} posts={technologyPosts} />
      <Footer />
    </>
  );
};
export default Technology;
