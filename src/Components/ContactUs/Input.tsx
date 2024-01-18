const Input = () => {
  return (
    <div className="flex items-center justify-center pb-5 md:pb-20 pl-2 pr-2">
      <div className="w-full md:w-2/4">
        <input
          className="mt-2 px-4 py-3 md:py-5 bg-white border border-slate-300 placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full md:text-sm focus:ring-1"
          placeholder="Full Name"
        />
        <input
          className="mt-2 px-4 py-3 md:py-5 bg-white border border-slate-300 placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full md:text-sm focus:ring-1"
          placeholder="Your Email"
        />
        <input
          className="mt-2 px-4 py-3 md:py-5 bg-white border border-slate-300 placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full md:text-sm focus:ring-1"
          placeholder="Query Related"
        />
        <input
          className="mt-2 px-4 pt-3 pb-10 md:py-5 bg-white border border-slate-300 placeholder-slate-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full md:text-sm focus:ring-1"
          placeholder="Message"
        />
        <button className="mt-2 font-bold pb-2 bg-amber-300 text-black w-full h-12 md:h-14">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Input;
