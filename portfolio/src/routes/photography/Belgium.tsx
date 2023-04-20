import Image from '../../components/Image';

export default () => {
  return (
    <>
      <h1 className="mx-auto mb-8 w-4/5 text-center text-2xl sm:text-3xl font-semibold">
        Belgium is a densely populated country so even though you see buildings
        everywhere, there is still beautiful nature.{' '}
      </h1>
      <div className="sm:grid grid-cols-3 lg:grid-cols-5">
        <Image
          link="Belgie/DSC_0022_lskbso.jpg"
          alt="Chiken"
          divClass="lg:col-span-2 lg:row-span-3 lg:col-start-1"
          color="bg-hunyadi-yelow"
        />
        <Image
          link="Belgie/DSC_0005_2_lbmczi.jpg"
          alt="Chiken"
          divClass="lg:row-span-1 lg:col-start-3 lg:row-start-3"
          color="bg-hunyadi-yelow"
        />
        <Image
          link="Belgie/DSC_0765_blalyp.jpg"
          alt="Chiken"
          divClass="lg:row-span-3 lg:row-start-2 lg:col-span-2 lg:col-start-4"
          color="bg-hunyadi-yelow"
        />
        <Image
          link="Belgie/DSC_0741_qabqen.jpg"
          alt="Chiken"
          divClass="lg:row-span-2 lg:row-start-4"
          color="bg-hunyadi-yelow"
        />
        <Image
          link="Belgie/DSC_0012_w5mvt8.jpg"
          alt="Chiken"
          divClass="lg:row-span-4 lg:col-span-2"
          color="bg-hunyadi-yelow"
        />
        <Image
          link="Belgie/DSC_0008_dlo9si.jpg"
          alt="Chiken"
          divClass="lg:row-span-6 lg:col-span-2"
          color="bg-hunyadi-yelow"
        />
        <Image
          link="Belgie/DSC_0053_otjhcm.jpg"
          alt="Chiken"
          divClass="lg:row-span-2 "
          color="bg-hunyadi-yelow"
        />
        <Image
          link="Belgie/DSC_0147_f7t97w.jpg"
          alt="Chiken"
          divClass="lg:row-span-5 lg:col-span-3"
          color="bg-hunyadi-yelow"
        />
        <Image
          link="Belgie/DSC_0006_heuzfm.jpg"
          alt="Chiken"
          divClass="lg:row-span-2 "
          color="bg-hunyadi-yelow"
        />

        <Image
          link="Belgie/DSC_0144_enkhhb.jpg"
          alt="Chiken"
          divClass="lg:row-span-2"
          color="bg-hunyadi-yelow"
        />
      </div>
    </>
  );
};
