import NavBar from "../NavBar.tsx";
import Footer from "../Footer.tsx";
import FeaturedPosts from "./FeaturedPosts.tsx";
import AllPosts from "./AllPosts.tsx";
import AllCatagories from "./AllCatagories.tsx";
const Blog = () =>{
    return (
        <>
            <NavBar/>
            <FeaturedPosts/>
            <AllPosts/>
            <AllCatagories/>
            <Footer/>
        </>
    )
}
export default Blog