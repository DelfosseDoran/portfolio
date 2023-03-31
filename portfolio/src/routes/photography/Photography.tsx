import Country from "../../components/Country";
import Link from "../../components/Link";
export default () => {
  return (
    <>
      <h1 className="mx-auto mb-8 w-3/5 text-center text-3xl font-semibold">
        I've been to many places around the world. So i capture those moments in
        beautiful photos. Here are the countries where i have been.
      </h1>
      <div className="mx-auto gap-y-6 pb-10 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:w-4/6">
        <Country
          country="Belgium"
          srcLink="/images/DSC_0050.jpg"
          text="See the photos from where i live"
          link="belgium"
        />
        <Country
          country="Oman"
          srcLink="./src/assets/photos/oman/DSC_0038.jpg"
          text="I went for 2 weeks to Oman it has a beautiful nature somting i havent seen before."
          link="oman"
        />
        <Country
          country="Finland"
          srcLink="./src/assets/photos/finland/DSC_1271.jpg"
          text="I went to Finland in the best season it was cold but worth it."
          link="finland"
        />
        <p className=" text-xl font-medium w-80 m-auto text-center">
          All photos are taken whit a Nikon D3500. I use a 18-55mm lens and a 70-300mm lens.
        </p>
        <Country
          country="Canada"
          srcLink="./src/assets/photos/canada/DSC_0243.jpg"
          text="I went to the east coast of canda and saw another full-on different nature."
          link="canada"
        />
        
      </div>
    </>
  );
};