import whiteHouse from "../../assets/whiteHouse.png";

const FuturePosts = () => {
  return (
    <div className="pt-8 sm:pt-32 flex flex-col sm:flex-row px-4 sm:px-32 pb-4 sm:pb-20">
      <div className="mb-8 sm:mb-0">
        <p className="text-xl sm:text-3xl font-bold pb-4 sm:pb-11">
          Featured post
        </p>
        <div>
          <img
            className="w-full sm:w-3/4 pb-4 sm:pb-11 cursor-pointer"
            src={whiteHouse}
            alt="Featured Post"
          />
          <p className="pb-4 sm:pb-11 text-base">
            By <strong className="text-indigo-700">John Deo</strong> | May 23,
            2022
          </p>
          <p className="pb-4 sm:pb-11 font-bold text-xl sm:text-3xl w-full sm:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            sunt animi, magnam quis eos, error itaque, dolores!
          </p>
          <p className="pb-4 sm:pb-11 text-base w-full sm:w-2/4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button className="font-bold pb-2 bg-amber-300 text-black w-full sm:w-52 h-14 cursor-pointer">
            Read More &#62;
          </button>
        </div>
      </div>
      <div>
        <p className="text-xl sm:text-2xl font-bold pb-4 sm:pb-11">All post</p>
        <div className=" text-base">
          <div className="mb-4 sm:mb-20 px-2.5 py-2.5 hover:bg-amber-100">
            <p>
              By <strong className="text-indigo-700">John Deo </strong>| May 23,
              2022
            </p>
            <p className="text-xl sm:text-2xl font-bold">
              <a href="/blog">
                8 Figma design systems that you can download for free today.
              </a>
            </p>
          </div>
          <div className="mb-4 sm:mb-20 px-2.5 py-2.5 hover:bg-amber-100">
            <p>
              By <strong className="text-indigo-700">John Deo</strong>| May 23,
              2022
            </p>
            <p className="text-xl sm:text-2xl font-bold">
              8 Figma design systems that you can download for free today.
            </p>
          </div>
          <div className="mb-4 sm:mb-20 px-2.5 py-2.5 hover:bg-amber-100">
            <p>
              By <strong className="text-indigo-700">John Deo</strong>| May 23,
              2022
            </p>
            <p className="text-xl sm:text-2xl font-bold">
              8 Figma design systems that you can download for free today.
            </p>
          </div>
          <div className="px-2.5 py-2.5 hover:bg-amber-100">
            <p>
              By <strong className="text-indigo-700">John Deo</strong>| May 23,
              2022
            </p>
            <p className="text-xl sm:text-2xl font-bold">
              8 Figma design systems that you can download for free today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturePosts;
