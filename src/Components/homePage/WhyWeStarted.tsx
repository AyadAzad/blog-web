import people from "../../assets/people.png";

const WhyWeStarted = () => {
  return (
    <div className="w-full md:w-10/12 ml-auto mr-auto md:ml-32 md:mr-32 pt-8 md:pt-20 pb-10 md:pb-20 mb-60 md:mb-10">
      <div className="relative w-full lg:w-full md:w-2/3 mx-auto md:mx-0">
        <img src={people} />
        <div className="absolute bg-white pl-10 left-14 right-0 md:left-1/3 md:right-40 md:pl-20 pt-20 md:bottom-0 bottom-0 h-5/6">
          <p className="top-52 text-base pb-4 md:pb-11">WHY WE STARTED </p>
          <p className="pb-4 md:pb-11 font-bold text-4xl md:text-5xl">
            It started out as a simple idea and evolved into our passion
          </p>
          <p className="pb-4 md:pb-11 text-base md:text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <button className="font-bold pb-2 bg-amber-300 text-black w-52 h-14">
            Discover our story &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyWeStarted;
