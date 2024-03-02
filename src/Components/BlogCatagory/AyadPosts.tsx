import {useTranslation} from "react-i18next";
import PostListData from "../Blogs/PostListData.tsx";
import FilterPosts from "./FilterPosts.tsx";

const AyadPosts = () =>{
    const { t } = useTranslation();

    const ayadPosts = PostListData.filter(
        (post) => post.author === "Ayad Ali"
    );
    return (
        <>
            <FilterPosts posts={ayadPosts} title={t("My posts")}/>
        </>
    )
}
export default AyadPosts