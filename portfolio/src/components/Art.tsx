export default ({link, alt, start ,col, row}:{link:string, alt:string, start?:string, col?:string, row?:string}) => {
  return <div className={` p-4 bg-naples-yelow ${col} ${row} ${start} `}>
    <img src={link} alt={alt} />
  </div>;
};
