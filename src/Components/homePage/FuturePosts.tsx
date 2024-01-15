import whiteHouse from "../../assets/whiteHouse.png";

const FuturePosts = () => {
  return (
    <div className="pt-32 flex flex-row px-32 pb-20">
      <div>
        <p className="text-3xl font-bold pb-11">Featured post</p>
        <div>
          <img className="w-3/4 pb-11 cursor-pointer" src={whiteHouse} />
          <p className="pb-11 text-base">
            By <strong className="text-indigo-700">John Deo</strong>| May 23,
            2022
          </p>
          <p className="pb-11 font-bold text-3xl w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            sunt animi, magnam quis eos, error itaque, dolores!
          </p>
          <p className="pb-11 text-base w-2/4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button className="font-bold pb-2 bg-amber-300 text-black w-52 h-14 cursor-pointer">
            Read More &#62;
          </button>
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold pb-11">All post</p>
        <div className=" text-base">
          <div className="mb-20 px-2.5 py-2.5 hover:bg-amber-100">
            <p>
              By <strong className="text-indigo-700">John Deo </strong>| May 23,
              2022
            </p>
            <p className="text-2xl font-bold">
              <a href="/blog">
              8 Figma design systems that you can download for free today.
              </a>
            </p>
          </div>
          <div className="mb-20 px-2.5 py-2.5 hover:bg-amber-100">
            <p>
              By <strong className="text-indigo-700">John Deo</strong>| May 23,
              2022
            </p>
            <p className="text-2xl font-bold">
              8 Figma design systems that you can download for free today.
            </p>
          </div>
          <div className="mb-20 px-2.5 py-2.5 hover:bg-amber-100">
            <p>
              By <strong className="text-indigo-700">John Deo</strong>| May 23,
              2022
            </p>
            <p className="text-2xl font-bold">
              8 Figma design systems that you can download for free today.
            </p>
          </div>
          <div className="mb-20 px-2.5 py-2.5 hover:bg-amber-100">
            <p>
              By <strong className="text-indigo-700">John Deo</strong>| May 23,
              2022
            </p>
            <p className="text-2xl font-bold">
              8 Figma design systems that you can download for free today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FuturePosts;
