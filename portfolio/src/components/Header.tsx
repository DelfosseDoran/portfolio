import Links from './Link';
import{ Home, Camera, Network, Paintbrush } from 'lucide-react'

export default () => {
  return (
    <header className="pb-4">
      <div className="hidden justify-end font-medium text-raisin-black-600 md:flex">
        <Links
          link="/"
          text="Home"
          colorText="hover:text-light-orange"
          colorbg1="peer-hover:bg-light-orange"
          padding="p-8"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600"
        />
        <Links
          link="/projects"
          text="Projects"
          colorText="hover:text-light-orange"
          colorbg1="peer-hover:bg-light-orange"
          padding="p-8"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600"
        />
        <Links
          link="/digital-art"
          text="Digital art"
          colorText="hover:text-light-orange"
          colorbg1="peer-hover:bg-light-orange"
          padding="p-8"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600"
        />
        <Links
          link="/photography"
          text="Photography"
          colorText="hover:text-light-orange"
          colorbg1="peer-hover:bg-light-orange"
          padding="p-8"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600"
        />
      </div>
      <div className=" w-screen flex justify-center font-medium text-raisin-black-600 md:hidden">
        <Links
          link="/"
          text={<Home/>}
          colorText="hover:text-light-orange"
          colorbg1="peer-hover:bg-light-orange"
          padding="p-8"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600"
        />
        <Links
          link="/projects"
          text={<Network/>}
          colorText="hover:text-light-orange"
          colorbg1="peer-hover:bg-light-orange"
          padding="p-8"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600"
        />
        <Links
          link="/digital-art"
          text={<Paintbrush/>}
          colorText="hover:text-light-orange"
          colorbg1="peer-hover:bg-light-orange"
          padding="p-8"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600"
        />
        <Links
          link="/photography"
          text={<Camera/>}
          colorText="hover:text-light-orange"
          colorbg1="peer-hover:bg-light-orange"
          padding="p-8"
          paddingbot="pb-4"
          color="focus:ring-raisin-black-600"
        />
      </div>
    </header>
  );
};
