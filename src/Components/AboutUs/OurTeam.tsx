import { useTranslation } from "react-i18next";
import hands from "../../assets/hands.png";
import threePerson from "../../assets/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png";

const OurTeam = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-16 md:pt-32 flex items-center justify-center pb-8 md:pb-32">
      <div className="w-full md:w-10/12">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/4 md:pr-32 pt-8 md:pt-20">
            <p className="pb-4 md:pb-8 font-bold text-xl md:text-3xl">
              {t("Our team of creatives")}
            </p>
            <p className="pb-4 md:pb-8 font-medium text-base md:text-2xl">
              {t(
                "We sincerely believe that our diversity makes us stronger and allows us to provide unique ideas to our readers."
              )}
            </p>
            <p className="text-sm md:text-base">
              {t(
                "The blog team is a group of dedicated professionals who are ready to share their knowledge and experience. We appreciate the contribution of each member, and it is the interaction of our team that gives life to our creative ideas and projects."
              )}
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <img src={hands} alt="Hands"></img>
          </div>
        </div>
        <div className="mt-8 md:mt-32 flex flex-col md:flex-row">
          <div className="md:order-2">
            <img src={threePerson} alt="Three Persons"></img>
          </div>
          <div className="w-full md:w-2/4 md:pr-32 pt-8 md:pt-20">
            <p className="pb-4 md:pb-8 font-bold text-xl md:text-3xl">
              {t("Why we started this Blog")}
            </p>
            <p className="pb-4 md:pb-8 font-medium text-base md:text-2xl">
              {t(
                "In our world, creativity is a key element of successful development"
              )}
            </p>
            <p className="text-sm md:text-base">
              {t(
                "The launch of this blog was an opportunity for us to create a community of like-minded people where people from different fields of creativity can share experiences, support each other and discover amazing perspectives of the creative process together."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
