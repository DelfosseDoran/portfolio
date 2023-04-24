import { Cloudinary } from '@cloudinary/url-gen';

// Import plugins
import {
  AdvancedImage,
  lazyload,
  accessibility,
  responsive,
  placeholder,
} from '@cloudinary/react';

export default ({
  link,
  alt,
  divClass,
  color = 'bg-royal-purple',
  media3,
  media5,
}: {
  link: string;
  alt: string;
  divClass?: string;
  color?: string;
  media3: number;
  media5: number;
}) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dckotgjju',
    },
  });
  const myImage = cld.image(link);
  myImage.format('webp');
  return (
    <div className={` p-4 ${color} ${divClass} `}>
      <div className='bg-white'>
        <AdvancedImage
          cldImg={myImage}
          plugins={[
            responsive({
              steps: [275, 300, 350, 400, 600, 650, 800, 900, 1200],
            }),
          ]}
        />
      </div>
    </div>
  );
};
