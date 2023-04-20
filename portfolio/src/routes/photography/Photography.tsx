import Country from "../../components/Country";
import Link from "../../components/Link";
export default () => {
  return (
    <>
      <h1 className="mx-auto mb-8 w-4/5 text-center text-2xl sm:text-3xl font-semibold">
        I've been to many places around the world. So i capture those moments in
        beautiful photos. Here are the countries where i have been.
      </h1>
      <div className="mx-auto gap-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:w-4/6 pb-6 justify-center items-center">
        <Country
          country="Belgium"
          srcLink="Belgie/DSC_0050_ep8q82.jpg"
          text="See the photos from where i live"
          link="belgium"
        />
        <Country
          country="Oman"
          srcLink="oman/DSC_0038_dn6wgk.jpg"
          text="I went for 2 weeks to Oman it has a beautiful nature somting i havent seen before."
          link="oman"
        />
        <Country
          country="Finland"
          srcLink="finland/DSC_1271_fmfi9m.jpg"
          text="I went to Finland in the best season it was cold but worth it."
          link="finland"
        />
        <div className="justify-center items-center">
          <p className="  text-xl font-medium mb-6 w-80 m-auto text-center md:mb-0">
            All photos are taken whit a Nikon D3500. I use a 18-55mm lens and a
            70-300mm lens.
          </p>
        </div>
        <Country
          country="Canada"
          srcLink="canada/0.1DSC_0243_ifn31a.jpg"
          text="I went to the east coast of canda and saw another full-on different nature."
          link="canada"
        />
        <Country
          country="Croatia"
          srcLink="croatie/DSC_0972_solfv9.jpg"
          text="I went to the coastal city of zadar, hot but oh so beautiful. "
          link=""
        />
      </div>
    </>
  );
};