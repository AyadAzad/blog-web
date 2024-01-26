import PostListData from "../Blogs/PostListData.tsx";
import NavBar from "../NavBar.tsx";
import FilterPosts from "./FilterPosts.tsx";
import Footer from "../Footer.tsx";

const Business = () =>{
    const filterPostsByCategory = (category) => {
        return PostListData.filter(post => post.catagory === category);
    };

    // Get technology-related posts
    const businessPosts = filterPostsByCategory('Business');

    return (
        <>
            <NavBar/>
            <FilterPosts title="Business" posts={businessPosts}/>
            <Footer/>
        </>
    )
}
export default Business
