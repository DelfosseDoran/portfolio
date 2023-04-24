import { AdvancedImage, responsive } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default ({
  srcLink,
  projectName,
  projectText,
  listTegnologys,
  reverse,
  link,
  start,
  alt
}: {
  reverse?: string;
  srcLink: string;
  projectName: string;
  projectText: string;
  listTegnologys: string[];
  link?: string;
  start: string;
  alt: string;
}) => {
  
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dckotgjju',
    },
  });
  const myImage = cld.image(srcLink);
  myImage.format('webp');
  const [show, setShow] = useState(false);
  let list;
  list = listTegnologys.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <div className={` col-span-11 lg:flex gap-4 pb-6 ${start} ${reverse}`}>
      {/* flex */}
      <div className="lg:w-2/5">
        <AdvancedImage
          cldImg={myImage}
          plugins={[
            responsive({
              steps: [300, 350, 450, 550, 600, 750, 900, 1200],
            }),
          ]}
        />
        {/* <img
          className=" h-fit w-full justify-center items-center bg-white"
          src={`https://res.cloudinary.com/dckotgjju/image/upload/${srcLink}`}
          srcSet={`
        https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_300,c_scale/${srcLink} 300w, 
        https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_350,c_scale/${srcLink} 350w, 
        https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_450,c_scale/${srcLink} 450w, 
        https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_550,c_scale/${srcLink} 550w, 
        https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_600,c_scale/${srcLink} 600w, 
        https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_750,c_scale/${srcLink} 750w, 
        `}
          sizes="(max-width: 400px) 350px, (max-width: 639px) 550px, (max-width: 1024px) 750px, (max-width: 1536px) 450px, 600px"
          alt={alt}
        /> */}
      </div>
      <div className=" lg:w-3/5 bg-tea-green flex flex-col justify-between p-2 h-fit">
        <h1 className="mb-4 text-2xl font-medium">{projectName}</h1>
        <p className="mb-2 xl:text-xl">{projectText}</p>
        <div>
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
              className={`focus:pb-2 w-full text-lg font-medium text-left flex justify-between`}
              onClick={() => {
                setShow(!show);
              }}
            >
              <p>Technologies</p>
              <ChevronDown />
            </button>
            <ul className={` ${show ? 'block' : 'hidden'} ml-2 `}>{list}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};
