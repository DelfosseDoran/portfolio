import Links from './Link';
import { Home, Camera, Network, Paintbrush, X, Menu } from 'lucide-react';
import Switch from './Switch';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default () => {
  const [lightMode, setLightMode] = useState(false);
  const [enabled, setEnabled] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    <header className="md:pb-4 flex justify-between pb-2">
      <button onClick={() => setEnabled(true)} className="flex justify-end w-full m-4 mb-0">
        <Menu size={28} />
      </button>

      <div
        className={`p-8 pb-4 flex justify-between flex-col items-end absolute top-0 right-0 w-screen h-screen bg-lemon-chiffon dark:bg-dark-purple transform transition-transform duration-300 ease-in-out ${
          enabled ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="">
          <button onClick={() => setEnabled(false)}>
            <X />
          </button>
        </div>
        <div className="flex flex-col items-end">
          {links.map((item, index) => {
            let scale = 'scale-100';
            if (hoveredIndex === index) scale = 'scale-150';
            else if (hoveredIndex === index - 1 || hoveredIndex === index + 1) scale = 'scale-110';
            return (
              <div className="relative font-medium group text-raisin-black-600 dark:text-platinum w-fit mx-1 flex flex-col transition-transform duration-300">
                <Link
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setEnabled(false)}
                  to={item.link}
                  className={`text-xl transition-transform duration-300 hover:text-light-orange hover:dark:text-celeste transform origin-right ${scale} focus:outline-none focus:ring-2 focus:ring-raisin-black-600 peer flex flex-col p-8 `}
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
    </header>
  );
};
