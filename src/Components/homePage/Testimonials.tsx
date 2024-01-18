import profilePicture from "../../assets/ProfilePicture.png";
import arrow from "../../assets/arrow.png";
import arrow2 from "../../assets/arrrow2.png";

const Testimonials = () => {
  return (
    <>
      <div className="mt-10 md:mt-20 pl-6 md:ml-32 w-full md:w-10/12 bg-amber-50 grid grid-cols-1 md:grid-cols-2 divide-x-2 py-16">
        <div className="w-full md:pl-32 md:pr-40">
          <p className="text-1xl font-medium pb-5">TESTIMONIALS</p>
          <p className="pb-5 font-bold text-4xl">
            What people say about our blog
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>

        <div className="w-full md:pl-14 md:pr-40 flex flex-col justify-center items-start gap-16 md:gap-32">
          <p className="text-xl md:text-2xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex flex-row items-center md:items-start">
              <div className="pr-4 md:pr-5">
                <img src={profilePicture} alt="Profile" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-medium">
                  Jonathan Vallem
                </p>
                <p className="text-slate-500 text-base md:text-lg">
                  New York, USA
                </p>
              </div>
            </div>
            <div className="flex flex-row mt-4 md:mt-0">
              <div className="px-2 md:px-4">
                <img src={arrow} alt="Arrow 1" />
              </div>
              <div>
                <img src={arrow2} alt="Arrow 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
