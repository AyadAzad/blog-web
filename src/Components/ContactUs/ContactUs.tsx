import Footer from "../Footer";
import NavBar from "../NavBar";
import BusinessCard from "./BusinessCard";
import Input from "./Input";

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="text-center pt-32 pb-24">
        <p className="font-bold text-1xl">CONTACT US</p>
        <p className="font-bold md:text-5xl text-3xl">
          Let’s Start a Conversation
        </p>
        <p className="flex justify-center items-center ">
          <p className="text-slate-500 pt-5 md:w-2/4 w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </p>
      </div>
      <BusinessCard />
      <Input />
      <Footer />
    </>
  );
};
export default ContactUs;
