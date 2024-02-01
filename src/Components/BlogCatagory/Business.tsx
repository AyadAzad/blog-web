import { useTranslation } from "react-i18next";
import PostListData from "../Blogs/PostListData.tsx";
import NavBar from "../NavBar.tsx";
import FilterPosts from "./FilterPosts.tsx";
import Footer from "../Footer.tsx";

const Business = () => {
  const { t } = useTranslation();

  const businessPosts = PostListData.filter(
    (post) => post.catagory === "Business"
  );

  return (
    <>
      <NavBar />
      <FilterPosts title={t("Business")} posts={businessPosts} />
      <Footer />
    </>
  );
};
export default Business;
