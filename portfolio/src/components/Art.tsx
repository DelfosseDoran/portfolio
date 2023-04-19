export default ({
  link,
  linkxs,
  linksm,
  linkm,
  linklg,
  linkxl,
  alt,
  divClass,
  media = '(max-width: 400px) 300px, (max-width: 639px) 600px,(max-width:1024px) 200px,(max-width:1536px) 250px,500px',
}: {
  link: string;
  linkxs?: string;
  linksm?: string;
  linkm?: string;
  linklg?: string;
  linkxl?: string;
  alt: string;
  divClass?: string;
  media?: string;
}) => {
  return (
    <div className={` p-4 bg-royal-purple ${divClass} `}>
      <img
        className=" h-fit w-full justify-center items-center bg-white"
        src={link}
        srcSet={`${linkxs} 300w, ${linksm} 400w, ${linkm} 500w, ${linklg} 700w, ${linkxl} 900w`}
        sizes={media}
        alt={alt}
      />
    </div>
  );
};
