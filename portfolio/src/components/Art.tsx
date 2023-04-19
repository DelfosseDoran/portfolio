export default ({
  link,
  linkxs,
  linksm,
  linkm,
  linklg,
  linkxl,
  alt,
  start,
  col,
  row,
}: {
  link: string;
  linkxs?: string;
  linksm?: string;
  linkm?: string
  linklg?: string;
  linkxl?: string;
  alt: string;
  start?: string;
  col?: string;
  row?: string;
}) => {
  return (
    <div className={` p-4 bg-royal-purple ${col} ${row} ${start} `}>
      <img
        className=" justify-center items-center w-full h-full bg-white"
        src={link}
        srcSet={`${linkxs} 300w, ${linksm} 400w, ${linkm} 500w, ${linklg} 700w, ${linkxl} 900w`}
        sizes="(max-width: 400px) 300px, (max-width: 639px) 600px,(max-width:1024px) 200px,(max-width:1536px) 250px,500px"
      />
    </div>
  );
};
