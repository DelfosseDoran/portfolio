export default ({
  link,
  alt,
  divClass,
  media = '(max-width: 400px) 300px, (max-width: 639px) 600px,(max-width:1024px) 200px,(max-width:1536px) 250px,500px',
  color = 'bg-royal-purple',
}: {
  link: string;
  alt: string;
  divClass?: string;
  media?: string;
  color?: string;
}) => {
  return (
    <div className={` p-4 ${color} ${divClass} `}>
      <img
        className=" h-fit w-full justify-center items-center bg-white"
        src={`https://res.cloudinary.com/dckotgjju/image/upload/${link}`}
        srcSet={`https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_300,c_scale/${link} 300w, https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_400,c_scale/${link} 400w, https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_500,c_scale/${link} 500w, https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_700,c_scale/${link} 700w, https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_900,c_scale/${link} 900w`}
        sizes={media}
        alt={alt}
      />
    </div>
  );
};
