import FilterPosts from "./FilterPosts.tsx";
import PostListData from "../Blogs/PostListData.tsx";
import NavBar from "../NavBar.tsx";
import Footer from "../Footer.tsx";
const Technology = () =>{
    // Function to filter posts based on category
    const filterPostsByCategory = (category) => {
        return PostListData.filter(post => post.catagory === category);
    };

    // Get technology-related posts
    const technologyPosts = filterPostsByCategory('Technology');

    return (
        <>
<NavBar/>
<FilterPosts title="Technology" posts={technologyPosts}/>
<Footer/>
        </>
    )
}
export default Technology