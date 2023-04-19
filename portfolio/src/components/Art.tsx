export default ({link, alt, start ,col, row}:{link:string, alt:string, start?:string, col?:string, row?:string}) => {
  return (
    <div className={` p-4 bg-royal-purple ${col} ${row} ${start} `}>
      <img className="bg-white" src={link} alt={alt} />
    </div>
  );
};
