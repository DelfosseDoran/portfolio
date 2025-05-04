import Links from './Link';
import { Cloudinary } from '@cloudinary/url-gen';

// Import plugins
import { AdvancedImage, responsive } from '@cloudinary/react';
import { Delivery } from '@cloudinary/url-gen/actions';
import { Home, Camera, Network, Paintbrush, X, Menu } from 'lucide-react';
import Switch from './Switch';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dckotgjju',
    },
  });

  const [lightMode, setLightMode] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const myImage = cld.image('art/portret_mro6gt.png');
  myImage.format('webp');
  myImage.delivery(Delivery.quality('auto'));

  const links = [
    {
      link: '/',
      text: 'Home',
    },
    { link: '/projects', text: 'Projects' },
    { link: '/digital-art', text: 'Digital art' },
    { link: '/photography', text: 'Photography' },
  ];

  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [lightMode]);

  useEffect(() => {
    document.body.style.overflow = enabled ? 'hidden' : 'auto';
  }, [enabled]);
  return (
    <header className="md:pb-4  pb-2">
      <div className="flex justify-between items-center p-8 pb-0 w-full">
        <AdvancedImage
          alt={'Digital Art'}
          className=" bg-platinum w-20 h-20 object-contain p-1 rounded"
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
        className={`absolute top-0 right-0 w-screen h-screen bg-lemon-chiffon dark:bg-dark-purple transform transition-transform duration-300 ease-in-out ${
          enabled ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className={` max-w-5xl h-full p-10 flex justify-between  mx-auto`}>
          <AdvancedImage
            alt={'Digital Art'}
            className=" bg-platinum p-8 rounded-md"
            cldImg={myImage}
            plugins={[
              responsive({
                steps: [275, 300, 350, 400, 500, 600, 650, 800, 900, 1200],
              }),
            ]}
          />
          <div className="flex justify-between flex-col items-end">
            <div className="">
              <button onClick={() => setEnabled(false)}>
                <X />
              </button>
            </div>
            <div className="flex flex-col  items-end">
              {links.map((item, index) => {
                let scale = 'scale-100';
                if (hoveredIndex === index) scale = 'scale-150';
                else if (hoveredIndex === index - 1 || hoveredIndex === index + 1)
                  scale = 'scale-110';
                return (
                  <div className="relative font-medium group text-raisin-black-600 dark:text-platinum w-fit mx-1 flex flex-col transition-transform duration-300">
                    <Link
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => setEnabled(false)}
                      to={item.link}
                      className={`text-xl transition-transform justify-between duration-300 hover:text-light-orange hover:dark:text-celeste transform origin-right ${scale} focus:outline-none focus:ring-2 focus:ring-raisin-black-600 peer flex flex-col p-8 px-0 `}
                    >
                      {item.text}
                    </Link>
                    {/* <span
              className={`absolute bottom-0 right-0 h-1 w-full origin-right scale-y-50 scale-x-0 duration-200 peer-hover:scale-x-100 peer-hover:bg-light-orange peer-hover:dark:bg-celeste`}
            ></span> */}
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
