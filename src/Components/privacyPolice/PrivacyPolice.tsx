import NavBar from "../NavBar";
import Footer from "../Footer";

const PrivacyPolice = () => {
  return (
    <>
      <NavBar />
      <div>
        <div className="bg-gray-100 text-center pt-20 pb-20 md:pt-24 md:pb-24">
          <p className="font-bold text-5xl md:text-6xl">Privacy Policy</p>
          <p className="text-slate-500 pt-5">
            Last Updated on 23th January 2024
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="pt-10 md:pt-32 w-full md:w-2/4 pb-10 md:pb-32">
            <p className="text-2xl md:text-3xl font-bold">
              General Information
            </p>
            <p className="pt-5">
              Thank you for visiting InsightBlog. This Privacy Policy outlines
              how we collect, use, and safeguard your personal information.We
              may collect the following types of personal information:
            </p>
            <ul className="md:pl-5 list-decimal pl-5">
              <li>
                <b>Voluntarily Provided Information:</b> When you interact with
                our website, you may provide us with personal information,
                including but not limited to your name, email address, and phone
                number.
              </li>
              <li>
                <b>Automatically Collected Information:</b> We collect
                information about your visit, such as your IP address, brower
                type, device information, and pages you visit on our website.
              </li>
            </ul>
            <p>
              We use the collected information for various purposes, including
              providing and maintaining our website, personalizing your
              experience on our website, sending newsletters, updates, and
              promotional materials, analyzing website usage and improving our
              content.
            </p>
            <p>
              We use cookies to enhance your browsing experience. By using our
              website, you consent to the use of cookies in accordance with our
              Cookie Policy.
            </p>
            <p className="pt-5 text-2xl md:text-3xl font-bold">
              Blog-Specific Information
            </p>

            <p className="pt-5">
              In addition to the general information provided above, this
              section covers the collection and use of data related to our
              blogs.
            </p>
            <p>
              When you leave comments on our blog posts, we collect the data
              shown in the comments form, and also your IP address and browser
              user agent to help spam detection.
            </p>
            <p>
              If you upload images to the website, you should avoid uploading
              images with embedded location data (EXIF GPS) included.
            </p>
            <p>
              Information submitted through contact forms on our website is
              retained for customer service purposes but is not used for
              marketing purposes without your consent.
            </p>
            <p>
              You have the right to opt-out of receiving promotional
              communications and to access, correct, or delete your personal
              information. You can exercise these rights by contacting us.
            </p>
            <p className="pt-5 text-2xl md:text-3xl font-bold">
              Changes to This Privacy Policy
            </p>
            <p className="pt-5">
              We may update our Privacy Policy periodically. Any changes will be
              posted on this page, and the updated policy will be effective as
              of the last updated date. If you have any questions or concerns
              about our Privacy Policy, please contact us.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolice;
