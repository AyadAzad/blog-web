import { useTranslation } from "react-i18next";
import blog_info from "../Blogs/blog_info.json";
import NavBar from "../NavBar.tsx";
import FilterPosts from "./FilterPosts.tsx";
import Footer from "../Footer.tsx";

const JavaScript = () => {
  const { t } = useTranslation();

  const economyPosts = blog_info.filter(
    (post) => post.blog_category === "#JavaScript"
  );

  return (
    <>
      <NavBar />
      <FilterPosts title={t("JavaScript")} posts={economyPosts} />
      <Footer />
    </>
  );
};
export default JavaScript;
