import man1 from "../../assets/man1.png";
import women1 from "../../assets/women1.png";
import women2 from "../../assets/women2.png";
import women3 from "../../assets/women3.png";
import socialWrapper from "../../assets/SocialWrapper.png";
import logoComponents from "../../assets/LogoComponent.png";

const ListOfAuthers = () => {
  return (
    <>
      <p className="pb-6 md:pb-11 font-bold text-xl md:text-3xl text-center pt-10 md:pt-20">
        List of Authors
      </p>
      <div className="flex flex-col md:flex-row pb-10 md:pb-20 w-full md:w-10/12 mx-auto">
        <div className="bg-slate-200 mx-auto my-5 md:my-0 md:mx-5 px-10 pt-10 hover:bg-amber-100 md:w-72">
          <div className="flex items-center justify-center">
            <img src={man1} alt="Floyd Miles"></img>
          </div>
          <p className="pb-3 md:pb-5 font-bold text-lg md:text-2xl text-center">
            Floyd Miles
          </p>
          <p className="text-slate-500 pb-6 md:pb-11 text-center">
            Content Writer @Company
          </p>
          <div className="pb-6 md:pb-10 flex items-center justify-center">
            <img src={socialWrapper} alt="Social"></img>
          </div>
        </div>

        <div className="bg-slate-200 mx-auto my-5 md:my-0 md:mx-5 px-10 pt-10 hover:bg-amber-100 md:w-72">
          <div className="flex items-center justify-center">
            <img src={women1} alt="Dianne Russell"></img>
          </div>
          <p className="pb-3 md:pb-5 font-bold text-lg md:text-2xl text-center">
            Dianne Russell
          </p>
          <p className="text-slate-500 pb-6 md:pb-11 text-center">
            Content Writer @Company
          </p>
          <div className="pb-6 md:pb-10 flex items-center justify-center">
            <img src={socialWrapper} alt="Social"></img>
          </div>
        </div>

        <div className="bg-slate-200 mx-auto my-5 md:my-0 md:mx-5 px-10 pt-10 hover:bg-amber-100 md:w-72">
          <div className="flex items-center justify-center">
            <img src={women2} alt="Jenny Wilson"></img>
          </div>
          <p className="pb-3 md:pb-5 font-bold text-lg md:text-2xl text-center">
            Jenny Wilson
          </p>
          <p className="text-slate-500 pb-6 md:pb-11 text-center">
            Content Writer @Company
          </p>
          <div className="pb-6 md:pb-10 flex items-center justify-center">
            <img src={socialWrapper} alt="Social"></img>
          </div>
        </div>

        <div className="bg-slate-200 mx-auto my-5 md:my-0 md:mx-5 px-10 pt-10 hover:bg-amber-100 md:w-72">
          <div className="flex items-center justify-center">
            <img src={women3} alt="Leslie Alexander"></img>
          </div>
          <p className="pb-3 md:pb-5 font-bold text-lg md:text-2xl text-center">
            Leslie Alexander
          </p>
          <p className="text-slate-500 pb-6 md:pb-11 text-center">
            Content Writer @Company
          </p>
          <div className="pb-6 md:pb-10 flex items-center justify-center">
            <img src={socialWrapper} alt="Social"></img>
          </div>
        </div>
      </div>
      <div className="pt-6 md:pt-10 pb-6 md:pb-10 flex items-center justify-center w-3/4 ml-14 md:ml-48">
        <img src={logoComponents} alt="Logo"></img>
      </div>
    </>
  );
};

export default ListOfAuthers;
