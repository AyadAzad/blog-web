import profilePicture from "../../assets/ProfilePicture.png";
import arrow from "../../assets/arrow.png";
import arrow2 from "../../assets/arrrow2.png";

const Testimonials = () => {
  return (
    <>
      <div className="mt-20 ml-32 w-10/12 bg-amber-50 grid grid-cols-2 divide-x-2 py-16">
        <div className="w-full pl-32 pr-40">
          <p className="text-1xl font-medium pb-5">TESTIMONIALS</p>
          <p className="pb-5 font-bold text-4xl">
            What people say about our blog
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>

        <div className="w-full pl-14 pr-40 flex flex-col justify-center items-start gap-32">
          <p className="text-2xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex justify-between">
            <div className="flex flex-row">
              <div>
                <img src={profilePicture}></img>
              </div>
              <div className="px-5">
                <p className="text-2xl font-medium">Jonathan Vallem</p>
                <p className="text-slate-500 text-base">New york, USA</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="px-4 pt-2">
                <img src={arrow} />
              </div>
              <div>
                <img src={arrow2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
