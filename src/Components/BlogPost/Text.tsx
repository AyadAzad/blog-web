import MarkdownFileRenderer from "./MarkdownFileRenderer.tsx";
const Text = () => {
const HowToCreateReactProject = 'src/Components/MarkdownBlogs/HowToCreateReactProject.md'
  return (
    <div className="ml-2 md:ml-80 mt-20 md:w-7/12 pb-20 md:pr-10 ">
  <MarkdownFileRenderer filePath={HowToCreateReactProject}/>
    </div>
  );
};

export default Text;
