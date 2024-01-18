import hands from "../../assets/hands.png";
import threePerson from "../../assets/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png";

const OurTeam = () => {
  return (
    <div className="pt-16 md:pt-32 flex items-center justify-center pb-8 md:pb-32 pl-2 pr-2">
      <div className="w-full md:w-10/12">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/4 md:pr-32 pt-8 md:pt-20">
            <p className="pb-4 md:pb-8 font-bold text-xl md:text-3xl">
              Our team of creatives
            </p>
            <p className="pb-4 md:pb-8 font-medium text-base md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <img src={hands} alt="Hands"></img>
          </div>
        </div>
        <div className="mt-8 md:mt-32 flex flex-col md:flex-row">
          <div className="md:order-2">
            <img src={threePerson} alt="Three Persons"></img>
          </div>
          <div className="w-full md:w-2/4 md:pr-32 pt-8 md:pt-20">
            <p className="pb-4 md:pb-8 font-bold text-xl md:text-3xl">
              Why we started this Blog
            </p>
            <p className="pb-4 md:pb-8 font-medium text-base md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
