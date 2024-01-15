import NavBar from "../NavBar.tsx";
import Footer from "../Footer.tsx";
import FeaturedPosts from "./FeaturedPosts.tsx";
import AllPosts from "./AllPosts.tsx";
import ChooseCategory from "../homePage/ChooseCategory.tsx";
const Blog = () =>{
    return (
        <>
            <NavBar/>
            <FeaturedPosts/>
            <AllPosts/>
            <ChooseCategory/>
            <Footer/>
        </>
    )
}
export default Blog