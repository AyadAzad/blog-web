import { useTranslation } from "react-i18next";
import PostListData from "../Blogs/PostListData";
import { Link } from "react-router-dom";
import { generateRoutePath } from "../../App/routes";
import { RouteName } from "../../App/routes";

type TypeProps = {
  selectedPath?: string;
};

const WhatToReadNext = ({ selectedPath }: TypeProps) => {

  const { t } = useTranslation();
  const filteredArray = PostListData.filter(
    (item) => item.path !== selectedPath
  );


  return (
    <>
      <div className="pb-20">
        <p className="ml-5 md:ml-32 text-3xl font-bold">
          {t("What to read next")}
        </p>
      </div>
      <div className="mx-28 flex flex-col md:flex-row">
        {filteredArray.map((item) => (
          <div key={item.path} className="mx-5 pt-14 md:w-10/12">
            <div>
              <img src={item.picture} alt="Read Next" />
              <p className="pt-5 pb-5 text-base">
                By <strong className="text-amber-600">{item.author} </strong>| Aug
                23, 2022
              </p>
              <Link
                to={`${generateRoutePath({ name: RouteName.Blog })}/${
                  item.path
                }`}
              >
                <p className="pb-5 text-3xl font-medium">{item.title}</p>
              </Link>
              <p className="text-slate-500 text-base w-72 overflow-hidden truncate">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default WhatToReadNext;
