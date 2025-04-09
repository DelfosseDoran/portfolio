import Link from './Link';

export default ({
  country,
  text,
  srcLink,
  link,
  region,
}: {
  country: string;
  text: string;
  srcLink: string;
  link: string;
  region?: string;
}) => {
  return (
    <div className="mx-auto mb-6 flex h-full w-80 flex-col justify-between bg-indian-red dark:bg-midnight-green md:mb-0 rounded-lg">
      <div>
        <img
          className="w-[320px] rounded-lg shadow-lg"
          src={`https://res.cloudinary.com/dckotgjju/image/upload/f_auto,w_320,c_scale/${srcLink}`}
          alt={`foto in ${country}`}
        />
        <div className="p-2">
          <div className="flex justify-between">
            <h1 className="text-xl font-medium">{country}</h1>
            <h2 className="text-lg font-medium">{region}</h2>
          </div>
          <p className="font-Signika text-lg">{text} </p>
        </div>
      </div>
      <div className="flex justify-end p-2">
        <Link
          link={`/photography/${link}`}
          text="see more"
          colorbg1="peer-hover:bg-raisin-black-600"
          color="focus:ring-raisin-black-600"
        />
      </div>
    </div>
  );
};
