import MarkdownFileRenderer from "./MarkdownFileRenderer.tsx";

const Text = () => {
  const HowToOpenYourOwnBusiness =
    "src/Components/MarkdownBlogs/HowToOpenYourOwnBusiness.md";
  return (
    <div className="ml-2 md:ml-80 mt-20 md:w-7/12 pb-20 md:pr-10 ">
      <MarkdownFileRenderer filePath={HowToOpenYourOwnBusiness} />
    </div>
  );
};

export default Text;
