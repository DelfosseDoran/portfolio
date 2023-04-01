import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default ({
  srcLink,
  projectName,
  projectText,
  listTegnologys,
  reverse,
  link,
  start
}: {
    reverse?: string;
  srcLink: string;
  projectName: string;
  projectText: string;
  listTegnologys: string[];
  link?: string;
  start: string;
}) => {
  let list;
  list = listTegnologys.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <div className={` col-span-11 md:flex gap-4 pb-6 ${start} ${reverse}`}>
      {/* flex */}
      <div className="md:w-2/5">
        <img src={srcLink} alt={`foto of ${projectName}`} />
      </div>
      <div className=" md:w-3/5 bg-tea-green">
        <div className="p-2 ">
          <h1 className="mb-4 text-xl font-medium">{projectName}</h1>
          <p className="mb-2">{projectText}</p>
          {link ? (
            <div className="my-3">
              <a
                className="my-2 bg-Feldgrau p-2 text-lemon-chiffon"
                href={link}
              >
                the website
              </a>
            </div>
          ) : null}
          <div className=" bg-Feldgrau p-2 text-lemon-chiffon">
            <button
              className={`peer focus:pb-2 w-full text-lg font-medium text-left flex justify-between`}
            >
              <p>Technologies</p>
              <ChevronDown/>
            </button>
            <ul className={` peer-focus:block ml-2 hidden`}>{list}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};
