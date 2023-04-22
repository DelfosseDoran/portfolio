import Image from '../../components/Image';

export default () => {
  return (
    <>
      <h1 className="mx-auto mb-8 w-4/5 text-center text-2xl sm:text-3xl font-semibold">
        I went to the coastal town of zadar for 1 week. It is a beautiful city
        for some rest.
      </h1>
      <div className="sm:grid grid-cols-3 lg:grid-cols-5">
        <Image
          link="croatie/DSC_0977_fmq6em.jpg"
          alt="Sunset over the sea"
          divClass="row-span-2 row-start-2"
          color="bg-burnt-sienna"
          media3={0}
          media5={0}
        />
        <Image
          link="croatie/DSC_0093_ickccn.jpg"
          alt="The old town of zadar"
          divClass="row-span-2 row-start-3 "
          color="bg-burnt-sienna"
          media3={0}
          media5={0}
        />
        <Image
          link="croatie/DSC_0043_a3thdn.jpg"
          alt="A old bilding in croatia"
          divClass="row-span-4 lg:row-span-4"
          color="bg-burnt-sienna"
          media3={0}
          media5={0}
        />
        <Image
          link="croatie/DSC_0021_ykh3n9.jpg"
          alt="deik at night"
          divClass="row-span-2 "
          color="bg-burnt-sienna"
          media3={0}
          media5={0}
        />
        <Image
          link="croatie/DSC_0065_zqdji4.jpg"
          alt="The sea"
          divClass="row-span-3 col-span-2 lg:row-span-4"
          color="bg-burnt-sienna"
          media3={1}
          media5={1}
        />
<div className='hidden bg-burnt-sienna lg:flex'></div>
        <Image
          link="croatie/DSC_0101_nbf9to.jpg"
          alt="3 wells in a line"
          divClass="row-span-3 lg:col-span-2 lg:row-span-6"
          color="bg-burnt-sienna"
          media3={0}
          media5={1}
        />
        <Image
          link="croatie/DSC_0965_sjlnfx.jpg"
          alt="sunset in the village"
          divClass="row-span-2"
          color="bg-burnt-sienna"
          media3={0}
          media5={0}
        />
        <Image
          link="croatie/DSC_0980_ojepf5.jpg"
          alt="people enjoying the view"
          divClass="row-span-2 lg:row-span-1 lg:col-span-2"
          color="bg-burnt-sienna"
          media3={0}
          media5={1}
        />
        <div className='hidden bg-burnt-sienna lg:flex'></div>
        <Image
          link="croatie/DSC_0061_hfw1de.jpg"
          alt="the market at the centreum"
          divClass="row-span-2 lg:col-span-3 lg:row-span-4"
          color="bg-burnt-sienna"
          media3={0}
          media5={2}
        />
        <Image
          link="croatie/DSC_0971_klmfee.jpg"
          alt="illuminated bridge"
          divClass="row-span-1 col-span-2 "
          color="bg-burnt-sienna"
          media3={1}
          media5={1}
        />
      </div>
    </>
  );
};
