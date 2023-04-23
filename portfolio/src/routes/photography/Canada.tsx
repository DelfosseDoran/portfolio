import Image from '../../components/Image';

export default () => {
  return (
    <>
      <h1 className="mx-auto mb-8 w-4/5 text-center text-2xl sm:text-3xl font-semibold">
        The west coast of canada was beautiful. Lots of nature and a very
        different culture.
      </h1>
      <div className="sm:grid grid-cols-3 lg:grid-cols-5">
        <Image
          link="canada/DSC_0325_b1um97.jpg"
          alt=" beach in canada"
          divClass="row-span-3 lg:col-span-2 lg:col-start-1 lg:row-span-4"
          color="bg-wine"
          media3={0}
          media5={1}
        />
        <Image
          link="canada/DSC_0432_mtwg7a.jpg"
          alt="terraced houses with copper roof"
          divClass="row-span-2 row-start-3 col-start-2  lg:col-start-3"
          color="bg-wine"
          media3={0}
          media5={0}
        />
        <Image
          link="canada/DSC_0583_zvhffw.jpg"
          alt="the tail of a whale"
          divClass="row-span-3 row-start-2 col-start-3 lg:col-start-4 "
          color="bg-wine"
          media3={0}
          media5={0}
        />
        <Image
          link="canada/DSC_0253_uvtzvg.jpg"
          alt="Tree hanging over the water"
          divClass="row-span-4 lg:row-span-"
          color="bg-wine"
          media3={0}
          media5={0}
        />
        <Image
          link="canada/DSC_0317_kqys6i.jpg"
          alt="a seen that canoe"
          divClass="row-span-4 col-span-2 lg:col-span-1 lg:row-span-1 lg:col-start-1"
          color="bg-wine"
          media3={1}
          media5={0}
        />
        <Image
          link="canada/DSC_0252_gaookg.jpg"
          alt="reviver"
          divClass="row-span-3 lg:col-span-3 lg:row-span-5"
          color="bg-wine"
          media3={0}
          media5={2}
        />
        <Image
          link="canada/DSC_0269_mmv9mv.jpg"
          alt="A high island in the sea"
          divClass="row-span-2 lg:row-span-1"
          color="bg-wine"
          media3={0}
          media5={0}
        />
        <Image
          link="canada/DSC_0207_yvabvh.jpg"
          alt="dog"
          divClass="row-span-3 lg:row-span-2"
          color="bg-wine"
          media3={0}
          media5={0}
        />
        <Image
          link="canada/0.1DSC_0250_gnsztf.jpg"
          alt="Photo from in the forest"
          divClass="row-span-2 col-span-2 lg:col-span-1 lg:row-span-1"
          color="bg-wine"
          media3={1}
          media5={0}
        />
        <Image
          link="canada/DSC_0260_beyqax.jpg"
          alt="some snow on the mountains in the middle of summer"
          divClass="row-span-1"
          color="bg-wine"
          media3={0}
          media5={0}
        />
      </div>
    </>
  );
};
