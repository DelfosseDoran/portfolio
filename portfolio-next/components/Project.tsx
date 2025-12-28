'use client';

import { AdvancedImage, responsive } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import  Link  from 'next/link';

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
          className="xl:rounded-lg rounded-t-lg shadow-lg"
          alt={alt}
          cldImg={myImage}
          plugins={[
            responsive({
              steps: [300, 350, 450, 550, 600, 750, 900, 1200],
            }),
          ]}
        />
      </div>
      <div className=" lg:w-3/5 bg-tea-green dark:bg-gradient-to-br dark:from-pale-purple dark:via-pale-purple dark:to-persian-pink dark:text-dark-purple flex flex-col justify-between p-2 h-fit xl:rounded-lg rounded-b-lg  shadow-lg">
        <h1 className="mb-4 text-2xl font-medium">{projectName}</h1>
        <p className="mb-2 xl:text-xl font-Signika">{projectText}</p>
        <div>
          {link ? (
            <div className="my-3">
              <a
                className="my-2 bg-Feldgrau dark:bg-raspberry-rose p-2 text-lemon-chiffon rounded-md"
                href={link}
              >
                the website
              </a>
            </div>
          ) : null}
          <div className=" bg-Feldgrau dark:bg-gradient-to-br dark:from-persian-pink dark:via-grape dark:to-grape p-2 text-lemon-chiffon rounded-md">
            <button
              className={`${
                show ? 'pb-2' : null
              } w-full text-lg font-medium text-left flex justify-between`}
              onClick={() => {
                setShow(!show);
              }}
            >
              <p>Technologies</p>
              {show ? <ChevronUp /> : <ChevronDown />}
            </button>
            <ul className={` ${show ? 'block' : 'hidden'} ml-2 `}>{list}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};
