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
  const mediaquieri3 = [
    '(max-width: 1024px) 300px',
    '(max-width: 1024px) 650px',
  ]; //0/medium 1=large
  const mediaquieri4 = [
    '(max-width: 1536px) 275px',
    '(max-width: 1536px) 600px',
    '(max-width: 1536px) 900px',
  ]; //0=medium //1=large //2=xl
  const mediaquieri5 = ['400px', '800px', '1200px']; //0=por //1=land //2=porxl //3=landxl //4=por2xl //5=land2xl
  return (
    <div className={` p-4 ${color} ${divClass} `}>
      <img
        className=" h-fit w-full justify-center items-center bg-white"
        src={`https://res.cloudinary.com/dckotgjju/image/upload/${link}`}
        srcSet={`
        https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_275,c_scale/${link} 275w, 
        https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_300,c_scale/${link} 300w, 
        https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_350,c_scale/${link} 350w, 
        https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_400,c_scale/${link} 400w, 
        https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_600,c_scale/${link} 600w, 
        https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_650,c_scale/${link} 650w, 
        https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_800,c_scale/${link} 800w, 
        https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_900,c_scale/${link} 900w,
        https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_1200,c_scale/${link} 1200w,
        `}
        sizes={`(max-width: 400px) 350px, (max-width: 639px) 600px, ${mediaquieri3[media3]}, ${mediaquieri4[media5]}, ${mediaquieri5[media5]}`}
        alt={alt}
      />
    </div>
  );
};
