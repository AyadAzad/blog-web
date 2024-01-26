import peopleWalking from "../../assets/photo-of-people-walking-on-hallway-3182811.png";
import womanInfront from "../../assets/two-women-in-front-of-dry-erase-board-1181533.png";
import business from "../../assets/bussiness.png";

const PostListData = [
  {
    path: "How-to-create-a-React-project",
    picture: womanInfront,
    icon: business,
    catagory: "Technology",
    title: "How to create a React project",
    // we had this error before, make sure the file path starts with a '/'
    // otherwise it doesn't work
    contentPath: "/src/Components/MarkdownBlogs/HowToCreateReactProject.md",
    text:
      " Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
      "                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n" +
      "                cupidatat non proident.",
  },

  {
    path: "How-to-run-your-own-bussiness",
    picture: peopleWalking,
    icon: business,
    catagory: "Bussiness",
    title: "How to run your own bussiness",
    contentPath: "/src/Components/MarkdownBlogs/HowToOpenYourOwnBusiness.md",
    text:
      " Duis aute irure dolor in reprehenderit in voluptate velit esse\n" +
      "                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n" +
      "                cupidatat non proident.",
  },
];
export default PostListData;
