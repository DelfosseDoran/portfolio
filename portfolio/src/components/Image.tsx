import { Cloudinary } from '@cloudinary/url-gen';

// Import plugins
import {
  AdvancedImage,
  lazyload,
  accessibility,
  responsive,
  placeholder,
} from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { full } from '@cloudinary/url-gen/qualifiers/fontHinting';
import { Delivery } from '@cloudinary/url-gen/actions';
import { auto } from '@cloudinary/url-gen/qualifiers/quality';
import { Reshape } from '@cloudinary/url-gen/actions/reshape';

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
  myImage.delivery(Delivery.quality('auto'));
  return (
    <div className={` p-4 ${color} ${divClass} `}>
      <div className="bg-white first:w-full ">
        <AdvancedImage
        className="w-full"
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
