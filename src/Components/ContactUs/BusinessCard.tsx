const BusinessCard = () => {
  return (
    <div className="flex items-center justify-center pb-5 md:pb-11">
      <div className="bg-purple-700 w-full md:w-2/4 flex flex-col md:flex-row px-5 md:px-14 py-5 md:py-14">
        <div className="text-slate-200 pr-5 md:pr-14 pb-5 md:pb-0">
          <p className="pb-3">Working hours</p>
          <hr className="pt-3 w-full"></hr>
          <p className="text-white font-bold text-xl md:text-2xl">
            Monday To Friday
          </p>
          <p className="text-white font-bold text-xl md:text-2xl">
            9:00 AM to 8:00 PM{" "}
          </p>
          <p className="text-slate-200">Our Support Team is available 24/7</p>
        </div>
        <div className="text-slate-200">
          <p className="pb-3">Contact Us</p>
          <hr className="pt-3"></hr>
          <p className="text-white font-bold text-xl md:text-2xl">
            020 7993 2905
          </p>
          <p className="text-slate-200">hello@finsweet.com</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
