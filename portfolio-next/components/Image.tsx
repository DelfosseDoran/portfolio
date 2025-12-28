"use client";

import { Cloudinary } from '@cloudinary/url-gen';
import {
  AdvancedImage,
  responsive,
} from '@cloudinary/react';
import { Delivery } from '@cloudinary/url-gen/actions';
export default ({
  link,
  alt,
  divClass,
  color = 'bg-royal-purple dark:bg-raspberry-rose',
}: {
  link: string;
  alt: string;
  divClass?: string;
  color?: string;
}) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dckotgjju',
    },
  });
  const myImage = cld.image(link);
  myImage.format('webp');
  myImage.delivery(Delivery.quality('auto'));
  return (
    <div className={` p-4 ${color} ${divClass} `}>
      <div className="">
        <AdvancedImage
        alt={alt}
        className="w-full bg-white"
          cldImg={myImage}
          plugins={[
            responsive({
              steps: [275, 300, 350, 400, 500, 600, 650, 800, 900, 1200],
            }),
          ]}
        />
      </div>
    </div>
  );
};
