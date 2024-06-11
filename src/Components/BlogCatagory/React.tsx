import { useTranslation } from "react-i18next";
import blog_info from "../Blogs/blog_info.json";
import NavBar from "../NavBar.tsx";
import FilterPosts from "./FilterPosts.tsx";
import Footer from "../Footer.tsx";

const React = () => {
  const { t } = useTranslation();

  const startupPosts = blog_info.filter(
    (post) => post.blog_category === "#React"
  );

  return (
    <>
      <NavBar />
      <FilterPosts title={t("React")} posts={startupPosts} />
      <Footer />
    </>
  );
};
export default React;
