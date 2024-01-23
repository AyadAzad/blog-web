import Ayad_Azad from "../../assets/Ayad_Azad.png";
import Alexandra_Rybinskaya from "../../assets/Alexandra_Rybinskaya.jpg";
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
            <img className="w-32 h-32" src={Ayad_Azad} alt="Ayad Azad"></img>
          </div>
          <p className="pb-3 md:pb-5 font-bold text-lg md:text-2xl text-center">
            <a href="/authors">Ayad Azad</a>
          </p>
          <p className="text-slate-500 pb-6 md:pb-11 text-center">
            Content Writer @Company
          </p>
          <div className="pb-6 md:pb-10 flex items-center justify-center">
            <img src={socialWrapper} alt="Social"></img>
          </div>
        </div>

        <div className="bg-slate-200 mx-auto my-5 md:my-0 md:mx-5 md:px-0 px-10 pt-10 hover:bg-amber-100 md:w-72">
          <div className="flex items-center justify-center">
            <img
              className=" rounded-full w-32 h-32"
              src={Alexandra_Rybinskaya}
              alt="Alexandra Rybinskaya"
            ></img>
          </div>
          <p className="pb-3 md:pb-5 font-bold text-lg md:text-2xl text-center">
            Alexandra Rybinskaya
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
