import people from "../../assets/people.png";

const WhyWeStarted = () => {
  return (
    <div className="w-10/12 ml-32 pb-20 pt-20">
      <div className="relative w-full">
        <img src={people} />
        <div className="absolute bg-white left-1/3 right-40 pl-20 pt-20 bottom-0 h-5/6">
          <p className="top-52 text-base pb-11">WHY WE STARTED </p>
          <p className="pb-11 font-bold text-5xl">
            It started out as a simple idea and evolved into our passion
          </p>
          <p className="pb-11 text-base text-slate-500">
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
