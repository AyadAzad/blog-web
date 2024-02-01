import { useTranslation } from "react-i18next";
import PostListData from "../Blogs/PostListData.tsx";
import NavBar from "../NavBar.tsx";
import FilterPosts from "./FilterPosts.tsx";
import Footer from "../Footer.tsx";

const Economy = () => {
  const { t } = useTranslation();

  const economyPosts = PostListData.filter(
    (post) => post.catagory === "Economy"
  );

  return (
    <>
      <NavBar />
      <FilterPosts title={t("Economy")} posts={economyPosts} />
      <Footer />
    </>
  );
};
export default Economy;
