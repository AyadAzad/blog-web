import man1 from "../../assets/man1.png";
import women1 from "../../assets/women1.png";
import women2 from "../../assets/women2.png";
import women3 from "../../assets/women3.png";
import socialWrapper from "../../assets/SocialWrapper.png";
import logoComponents from "../../assets/LogoComponent.png";

const ListOfAuthers = () => {
  return (
    <>
      <p className="pb-11 font-bold text-3xl text-center pt-20">
        List of Authors
      </p>
      <div className="flex flex-row pb-20 w-10/12 ml-32">
        <div className="bg-slate-200 mx-5 my-5 px-10 pt-10 hover:bg-amber-100">
          <div className="flex items-center justify-center">
            <img src={man1}></img>
          </div>
          <p className="pb-5 font-bold text-2xl text-center">Floyd Miles</p>
          <p className="text-slate-500 pb-11 text-center">
            Content Writer @Company
          </p>
          <div className="pb-10 flex items-center justify-center">
            <img src={socialWrapper} />
          </div>
        </div>

        <div className="bg-slate-200 mx-5 my-5 px-10 pt-10 hover:bg-amber-100">
          <div className="flex items-center justify-center">
            <img src={women1}></img>
          </div>
          <p className="pb-5 font-bold text-2xl text-center">Dianne Russell</p>
          <p className="text-slate-500 pb-11 text-center">
            Content Writer @Company
          </p>
          <div className="pb-10 flex items-center justify-center">
            <img src={socialWrapper} />
          </div>
        </div>

        <div className="bg-slate-200 mx-5 my-5 px-10 pt-10 hover:bg-amber-100">
          <div className="flex items-center justify-center">
            <img src={women2}></img>
          </div>
          <p className="pb-5 font-bold text-2xl text-center">Jenny Wilson</p>
          <p className="text-slate-500 pb-11 text-center">
            Content Writer @Company
          </p>
          <div className="pb-10 flex items-center justify-center">
            <img src={socialWrapper} />
          </div>
        </div>

        <div className="bg-slate-200 mx-5 my-5 px-10 pt-10 hover:bg-amber-100">
          <div className="flex items-center justify-center">
            <img src={women3}></img>
          </div>
          <p className="pb-5 font-bold text-2xl text-center">
            Leslie Alexander
          </p>
          <p className="text-slate-500 pb-11 text-center">
            Content Writer @Company
          </p>
          <div className="pb-10 flex items-center justify-center">
            <img src={socialWrapper} />
          </div>
        </div>
      </div>
      <div className="pt-10 pb-10 flex items-center justify-center">
        <img src={logoComponents}></img>
      </div>
    </>
  );
};

export default ListOfAuthers;
