import Image from "../../../components/Image";

export default () => {
  return (
    <>
      <h1 className="mx-auto mb-12 lg:mb-24  w-4/5 text-center text-2xl sm:text-3xl font-semibold">
        Belgium is a densely populated country so even though you see buildings
        everywhere, there is still beautiful nature.{" "}
      </h1>
      <div className="sm:grid grid-cols-3 lg:grid-cols-5">
        <Image
          link="Belgie/DSC_0022_lskbso.jpg"
          alt="Chicken"
          divClass="lg:col-span-2 row-span-3 lg:col-start-1 lg:row-start-1 row-start-2"
          color="bg-countries-belgium dark:bg-countries-dark-belgium"
        />
        <Image
          link="Belgie/DSC_0005_2_lbmczi.jpg"
          alt="sunset"
          divClass="lg:row-span-1 lg:col-start-3 lg:row-start-3 lg:row-span-1 row-span-3 col-start-2"
          color="bg-countries-belgium dark:bg-countries-dark-belgium"
        />
        <Image
          link="Belgie/DSC_0765_blalyp.jpg"
          alt="meadow with row of trees"
          divClass="row-span-3 lg:row-start-2 lg:col-span-2 lg:col-start-4 row-start-3 col-start-3"
          color="bg-countries-belgium dark:bg-countries-dark-belgium"
        />
        <Image
          link="Belgie/DSC_0741_qabqen.jpg"
          alt="dog for flowers"
          divClass="lg:row-span-2 lg:row-start-4 col-span-2 row-span-3 lg:col-span-1"
          color="bg-countries-belgium dark:bg-countries-dark-belgium"
        />
        <Image
          link="Belgie/DSC_0012_w5mvt8.jpg"
          alt="birdhouse in the bushes"
          divClass="lg:row-span-3 lg:col-span-2 "
          color="bg-countries-belgium dark:bg-countries-dark-belgium"
        />
        <Image
          link="Belgie/DSC_0008_dlo9si.jpg"
          alt="Flowers"
          divClass="lg:row-span-6 lg:col-span-2 row-span-3 "
          color="bg-countries-belgium dark:bg-countries-dark-belgium"
        />
        <Image
          link="Belgie/DSC_0053_otjhcm.jpg"
          alt="Green house in a meadow"
          divClass="lg:row-span-1 "
          color="bg-countries-belgium dark:bg-countries-dark-belgium"
        />
        <Image
          link="Belgie/DSC_0147_f7t97w.jpg"
          alt="Pear tree in bloom"
          divClass="lg:row-span-6 lg:col-span-3"
          color="bg-countries-belgium dark:bg-countries-dark-belgium"
        />
        <Image
          link="Belgie/DSC_0006_heuzfm.jpg"
          alt="The tips of the trees"
          divClass="row-span-2 lg:col-span-1 col-span-2"
          color="bg-countries-belgium dark:bg-countries-dark-belgium"
        />

        <Image
          link="Belgie/DSC_0144_enkhhb.jpg"
          alt="Moon"
          divClass="lg:row-span-2 "
          color="bg-countries-belgium dark:bg-countries-dark-belgium"
        />
      </div>
      <div className="absolute bg-countries-belgium dark:bg-countries-dark-belgium w-full h-12"></div>
    </>
  );
};
