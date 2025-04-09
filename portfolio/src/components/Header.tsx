import Links from './Link';
import{ Home, Camera, Network, Paintbrush } from 'lucide-react'
import Switch from './Switch'
import { useEffect, useState } from 'react';

export default () => {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (enabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [enabled]);
  return (
    <header className="md:pb-4 flex justify-between pb-2">
        
        <div className='flex gap-1 p-8 pb-4'>
        light
        <Switch enabled={enabled} setEnabled={setEnabled}/> dark</div>
      <div className="hidden justify-end items-center font-medium text-raisin-black-600 dark:text-platinum md:flex">
        <Links
          link="/"
          text="Home"
          colorText="hover:text-light-orange hover:dark:text-celeste"
          colorbg1="peer-hover:bg-light-orange peer-hover:dark:bg-celeste"
          padding="p-8"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600 "
        />
        <Links
          link="/projects"
          text="Projects"
          colorText="hover:text-light-orange hover:dark:text-celeste"
          colorbg1="peer-hover:bg-light-orange peer-hover:dark:bg-celeste"
          padding="p-8"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600"
        />
        <Links
          link="/digital-art"
          text="Digital art"
          colorText="hover:text-light-orange hover:dark:text-celeste"
          colorbg1="peer-hover:bg-light-orange peer-hover:dark:bg-celeste"
          padding="p-8"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600"
        />
        <Links
          link="/photography"
          text="Photography"
          colorText="hover:text-light-orange hover:dark:text-celeste"
          colorbg1="peer-hover:bg-light-orange peer-hover:dark:bg-celeste"
          padding="p-8"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600"
        />
      </div>
      <div className=" w-screen flex justify-center font-medium text-raisin-black-600 md:hidden">
        <Links
          link="/"
          text={<Home />}
          colorText="hover:text-light-orange hover:dark:text-celeste"
          colorbg1="peer-hover:bg-light-orange peer-hover:dark:bg-celeste"
          padding="sm:p-8 p-4"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600"
        />
        <Links
          link="/projects"
          text={<Network />}
          colorText="hover:text-light-orange hover:dark:text-celeste"
          colorbg1="peer-hover:bg-light-orange peer-hover:dark:bg-celeste"
          padding="sm:p-8 p-4"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600"
        />
        <Links
          link="/digital-art"
          text={<Paintbrush />}
          colorText="hover:text-light-orange hover:dark:text-celeste"
          colorbg1="peer-hover:bg-light-orange peer-hover:dark:bg-celeste"
          padding="sm:p-8 p-4"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600"
        />
        <Links
          link="/photography"
          text={<Camera />}
          colorText="hover:text-light-orange hover:dark:text-celeste"
          colorbg1="peer-hover:bg-light-orange peer-hover:dark:bg-celeste"
          padding="sm:p-8 p-4"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600"
        />
      </div>
    </header>
  );
};
