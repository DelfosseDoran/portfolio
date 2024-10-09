import Image from '../../components/Image';

export default () => {
  return (
    <>
      <h1 className="mx-auto mb-12 lg:mb-24  w-4/5 text-center text-2xl sm:text-3xl font-semibold">
        Italy the Country of art and history. The country of the renaissance. The country of the best food in the world. Whit other words the best country in the word.
      </h1>
      <div className="sm:grid grid-cols-3 lg:grid-cols-5">
        <Image
          link="italy/DSC_0696_rqdihx.jpg"
          alt="street in melano whit duomo in the background"
          divClass=" row-span-5 lg:row-span-4"
          color="bg-countries-italy"
        />
        <Image
          link="italy/DSC_0613_oa9kxj.jpg"
          alt="a marble quarry in Carrara"
          divClass=" row-span-3 row-start-2 col-start-2 "
          color="bg-countries-italy"
        />
        <Image
          link="italy/DSC_0655_leojre.jpg"
          alt="cinque terre"
          divClass=" row-span-3 lg:col-span-2 lg:row-span-4"
          color="bg-countries-italy"
        />
        <Image
          link="italy/DSC_0633_mki2hf.jpg"
          alt="St. Vitus Parish Church La Spezia"
          divClass="row-span-3  lg:col-span-2 lg:row-span-5"
          color="bg-countries-italy"
        />

        <Image
          link="italy/DSC_0595_mysndt.jpg"
          alt="trees in front of old bilding"
          divClass="row-span-4 lg:row-span-3 lg:row-start-3 lg:col-start-5"
          color="bg-countries-italy"
        />
        <Image
          link="italy/DSC_0672_ov8fmu.jpg"
          alt="Vue of the see in Cinque Terre"
          divClass="lg:row-span-2 lg:col-span-2"
          color="bg-countries-italy"
        />

        <Image
          link="italy/DSC_0515_qutjgv.jpg"
          alt="Cypress trees in firenze"
          divClass=" row-span-2 lg:row-span-1"
          color="bg-countries-italy"
        />
        <Image
          link="italy/DSC_0578_aqzi2s.jpg"
          alt="mountain vue from Boboli Gardens"
          divClass="row-span-2 col-start-3 lg:row-span-3"
          color="bg-countries-italy"
        />
        <Image
          link="italy/DSC_0533_djyqhb.jpg"
          alt="ponte vecchio"
          divClass=" row-span-3 col-span-2 lg:col-span-3 lg:row-span-1 "
          color="bg-countries-italy"
        />
        <Image
          link="italy/DSC_0670_mt1ndy.jpg"
          alt="Vue of the see in Cinque Terre"
          divClass="row-span-3 lg:col-span-2 lg:row-start-[7] lg:col-start-4 lg:row-span-4"
          color="bg-countries-italy"
        />
      </div>
      <div className="absolute bg-countries-italy w-full h-12"></div>
    </>
  );
};
