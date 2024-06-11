import { useTranslation } from "react-i18next";
import FilterPosts from "./FilterPosts.tsx";
import blog_info from "../Blogs/blog_info.json";
import NavBar from "../NavBar.tsx";
import Footer from "../Footer.tsx";

const Podcast = () => {
  const { t } = useTranslation();

  const technologyPosts = blog_info.filter(
    (post) => post.blog_category === "#podcast"
  );
  return (
    <>
      <NavBar />
      <FilterPosts title={t("Podcast")} posts={technologyPosts} />
      <Footer />
    </>
  );
};
export default Podcast;
