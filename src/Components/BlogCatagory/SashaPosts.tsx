import FilterPosts from "./FilterPosts.tsx";
import PostListData from "../Blogs/PostListData.tsx";
import {useTranslation} from "react-i18next";
const SashaPosts = () =>{
    const { t } = useTranslation();
    const sashaPosts = PostListData.filter(
        (post) => post.author === "Alexandra Rybinskaya"
    )
    return (
        <>
            <FilterPosts posts={sashaPosts} title={t("My posts")}/>
        </>
    )
}
export default SashaPosts