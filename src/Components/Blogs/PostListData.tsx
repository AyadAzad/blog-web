import peopleWalking from "../../assets/photo-of-people-walking-on-hallway-3182811.png";
import womanInfront from "../../assets/two-women-in-front-of-dry-erase-board-1181533.png";
import business from "../../assets/bussiness.png";
import economy from "../../assets/economy.png";
import technoogy from "../../assets/technology.png";
import photoOfPeople from "../../assets/photo-of-people-doing-handshakes-3183197.png";
import photoOfWomen from "../../assets/photo-of-woman-looking-at-man-3183173.png";

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
    text: " React JS has become one of the most popular JavaScript libraries for building user interfaces. Its component-based architecture and efficient data binding make it a go-to choice for developers when creating modern web applications.",
  },

  {
    path: "How-to-run-your-own-bussiness",
    picture: photoOfPeople,
    icon: business,
    catagory: "Business",
    title: "How to run your own bussiness",
    contentPath: "/src/Components/MarkdownBlogs/HowToOpenYourOwnBusiness.md",
    text: "Starting a business is more than just an enterprise, it is a journey full of passion, perseverance and the pursuit of a dream.",
  },

  {
    path: "Current-challenges-and-trends-in-the-global-economy",
    picture: peopleWalking,
    icon: economy,
    catagory: "Economy",
    title: "Current challenges and trends in the global economy",
    contentPath:
      "/src/Components/MarkdownBlogs/CurrentChallengesAndTrendsInTheGlobalEconomy.md",
    text: "The modern global economy is facing a number of complex challenges that significantly affect its structure and dynamics. In this article, we will look at some of the key trends and challenges facing the modern economy, as well as their impact on business, investment and society as a whole.",
  },
  {
    path: "Startup:The-Art-of-Starting-and-the-Path-to-Success",
    picture: photoOfWomen,
    icon: technoogy,
    catagory: "Startup",
    title: "Startup: The Art of Starting and the Path to Success",
    contentPath: "/src/Components/MarkdownBlogs/Startup.md",
    text: "Startups are the heart of innovation and the engine of progress in the business world. In this article, we will look at the key aspects of creating and developing a startup, sharing with you some valuable tips for those who are just starting their entrepreneurial journey.",
  },
];

export default PostListData;
