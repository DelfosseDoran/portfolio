'use client';

import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, responsive } from '@cloudinary/react';
import { Delivery } from '@cloudinary/url-gen/actions';
import {  X, Menu } from 'lucide-react';
import Switch from './Switch';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dckotgjju',
    },
  });

  const [lightMode, setLightMode] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
  // only runs on client
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setLightMode(prefersDark);
}, []);

  const myImage = cld.image('art/portret_mro6gt.png');
  myImage.format('webp');
  myImage.delivery(Delivery.quality('auto'));

  const links = [
    { link: '/', text: 'Home' },
    { link: '/projects', text: 'Projects' },
    { link: '/digital-art', text: 'Digital art' },
    { link: '/photography', text: 'Photography' },
  ];

  useEffect(() => {
    if (lightMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [lightMode]);

  useEffect(() => {
    document.body.style.overflowY = enabled ? 'hidden' : 'auto';
    document.body.style.width = '100vw';
    document.body.style.overflowX = 'hidden';
  }, [enabled]);

  return (
    <header className="md:pb-4 w-screen pb-2 z-50 " >
      <div className="flex justify-between items-center p-8 pb-0 w-full ">
        <AdvancedImage
          alt="Digital Art"
          className="bg-platinum w-20 h-20 object-contain p-1 rounded"
          cldImg={myImage}
          plugins={[
            responsive({
              steps: [275, 300, 350, 400, 500, 600, 650, 800, 900, 1200],
            }),
          ]}
        />
        <button onClick={() => setEnabled(true)}>
          <Menu size={28} />
        </button>
      </div>

      <div
        className={`z-50 fixed inset-0 w-screen h-screen-dvh bg-lemon-chiffon dark:bg-dark-purple transform transition-transform duration-300 ease-in-out ${
          enabled ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="w-full items-center max-w-5xl h-full p-10 flex justify-end sm:justify-between gap-5 mx-auto ">
          <AdvancedImage
            alt="Digital Art"
            className="sm:block hidden bg-platinum h-full max-w-[50%] w-fit p-8 rounded-md object-contain"
            cldImg={myImage}
            plugins={[
              responsive({
                steps: [275, 300, 350, 400, 500, 600, 650, 800, 900, 1200],
              }),
            ]}
          />

          <div className="flex w-fit justify-between h-full flex-col items-end">
            <div>
              <button onClick={() => setEnabled(false)}>
                <X />
              </button>
            </div>

            <div className="flex justify-between flex-col items-end">
              {links.map((item, index) => {
                let scale = 'scale-100';
                if (hoveredIndex === index) scale = 'scale-150';
                else if (hoveredIndex === index - 1 || hoveredIndex === index + 1)
                  scale = 'scale-110';

                return (
                  <div
                    key={item.link}
                    className="relative font-medium group text-raisin-black-600 dark:text-platinum w-fit mx-1 flex flex-col transition-transform duration-300"
                  >
                    <Link
                      href={item.link} // ✅ replaced 'to' with 'href'
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => setEnabled(false)}
                      className={`text-xl transition-transform justify-between duration-300 hover:text-light-orange hover:dark:text-celeste transform origin-right ${scale} focus:outline-none focus:ring-2 focus:ring-raisin-black-600 peer flex flex-col p-8 px-0`}
                    >
                      {item.text}
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-1">
              light
              <Switch enabled={lightMode} setEnabled={setLightMode} /> dark
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
