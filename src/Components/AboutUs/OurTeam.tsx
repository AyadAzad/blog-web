import hands from "../../assets/hands.png";
import threePerson from "../../assets/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png";

const OurTeam = () => {
  return (
    <div>
      <div className="pt-32 flex items-center justify-center pb-32">
        <div className="w-10/12">
          <div className="flex flex-row">
            <div className="w-2/4 pr-32 pt-20">
              <p className="pb-8 font-bold text-3xl">Our team of creatives</p>
              <p className="pb-8 font-medium text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
            <div>
              <img src={hands}></img>
            </div>
          </div>
          <div className="pt-32 flex flex-row">
            <div>
              <img src={threePerson}></img>
            </div>
            <div className="w-2/4 pl-32 pt-20">
              <p className="pb-8 font-bold text-3xl">
                Why we started this Blog
              </p>
              <p className="pb-8 font-medium text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
