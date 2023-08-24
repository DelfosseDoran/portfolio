import Image from '../../components/Image';

export default () => {
  return (
    <>
      <h1 className="mx-auto mb-12 lg:mb-24  w-4/5 text-center text-2xl sm:text-3xl font-semibold">
        Finland is beautiful in winter and I was lucky enough to see this. I've
        seen lots of snow but also the northern light.
      </h1>
      <div className="sm:grid grid-cols-3 lg:grid-cols-5">
        <Image
          link="finland/DSC_1078-2-1_mvh44q.jpg"
          alt="Hut among the trees"
          divClass=" row-span-3 row-start-3 lg:row-span-2 lg:row-start-3"
          color="bg-moonstone"
        />
        <Image
          link="finland/DSC_1269_zyhnqb.jpg"
          alt="Tree under a lot of ice"
          divClass=" row-span-3 row-start-2 lg:col-span-2 lg:row-span2 lg:row-start-2 lg:col-start-2"
          color="bg-moonstone"
        />

        <Image
          link="finland/DSC_1067_mfzcgv.jpg"
          alt="small trees"
          divClass=" row-span-4 lg:row-span-3"
          color="bg-moonstone"
        />
        <Image
          link="finland/DSC_1063_sdjakq.jpg"
          alt="City of Kattilä"
          divClass="row-span-4 col-span-2 lg:col-span-1 lg:row-span-2"
          color="bg-moonstone"
        />
        <Image
          link="finland/20220209_162537_m0w4jr.jpg"
          alt="landscape Finland"
          divClass="row-span-6 lg:row-span-4"
          color="bg-moonstone"
        />
        <div className="hidden lg:flex lg:row-span-3 bg-moonstone"></div>
        <Image
          link="finland/DSC_1064-2_iq39r4.jpg"
          alt="ski lifts"
          divClass="row-span-3 lg:col-span-2"
          color="bg-moonstone"
        />
        <Image
          link="finland/20220210_123608_exoch8.jpg"
          alt="dogsled"
          divClass="row-span-4"
          color="bg-moonstone"
        />

        <Image
          link="finland/20220210_124000_swsvy3.jpg"
          alt="landscape Finland"
          divClass=" col-span-2 row-span-4"
          color="bg-moonstone"
        />
        <Image
          link="finland/DSC_1058_omdpe8.jpg"
          alt="landscape Finland"
          divClass="row-span-1 lg:col-span-2"
          color="bg-moonstone"
        />
        <Image
          link="finland/20220207_140037_jf6nug.jpg"
          alt="landscape Finland"
          divClass=" row-span-1 lg:col-span-3"
          color="bg-moonstone"
        />
        <div className=" bg-moonstone h-20 lg:hidden"></div>
      </div>
      <div className="absolute bg-moonstone w-full h-12"></div>
    </>
  );
};
