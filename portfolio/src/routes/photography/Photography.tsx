import Country from "../../components/Country";
import Link from "../../components/Link";
export default () => {
  return (
    <>
      <h1 className="mx-auto mb-8 w-4/5 text-center text-2xl sm:text-3xl font-semibold">
        I'm fortunate to have visited many places around the world. I capture
        those moments in beautifull photos. Here are pictures of my last trips.
      </h1>
      <div className="mx-auto gap-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:w-4/6 pb-6 justify-center items-center">
        <Country
          country="Belgium"
          srcLink="Belgie/DSC_0050_ep8q82.jpg"
          text="The land of chocolate and waffles but also nature."
          link="belgium"
        />
        <Country
          country="Oman"
          srcLink="oman/DSC_0038_dn6wgk.jpg"
          text="I went to Oman it has beautiful nature, different culture."
          link="oman"
        />
        <Country
          country="Finland"
          srcLink="finland/DSC_1271_fmfi9m.jpg"
          text="I went to Finland in winter. I saw the polar light."
          link="finland"
        />
        <div className="justify-center items-center">
          <p className="  text-xl font-medium mb-6 w-80 m-auto text-center md:mb-0">
            All photos are taken with a Nikon D3500. I use a 18-55mm lens and a
            70-300mm lens.
          </p>
        </div>
        <Country
          country="Canada"
          srcLink="canada/0.1DSC_0243_ifn31a.jpg"
          text="I went to the east coast of canada and saw another full-on different nature."
          link="canada"
        />
        <Country
          country="Croatia"
          srcLink="croatie/DSC_0972_solfv9.jpg"
          text="I went to the coastal city of Zadar, hot but oh so beautiful. "
          link="Croatia"
        />
      </div>
    </>
  );
};