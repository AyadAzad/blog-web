import { useTranslation } from "react-i18next";
import blog_info from "../Blogs/blog_info.json";
import NavBar from "../NavBar.tsx";
import FilterPosts from "./FilterPosts.tsx";
import Footer from "../Footer.tsx";

const Python = () => {
  const { t } = useTranslation();

  const pythonPosts = blog_info.filter(
    (post) => post.blog_category === "#Python"
  );

  return (
    <>
      <NavBar />
      <FilterPosts title={t("Python")} posts={pythonPosts} />
      <Footer />
    </>
  );
};
export default Python;
