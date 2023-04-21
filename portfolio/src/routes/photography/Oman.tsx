import Image from "../../components/Image";

export default () => {return (
  <>
    <h1 className="mx-auto mb-8 w-4/5 text-center text-2xl sm:text-3xl font-semibold">
      Oman is the most ostentatious country in the arabian peninsula. I was
      there for 2 weeks and it was a wonderful trip.
    </h1>
    <div className="sm:grid grid-cols-3 lg:grid-cols-5">
      <Image
        link="oman/DSC_0151_ku9esh.jpg"
        alt="red dragonfly"
        divClass="lg:col-span-2 row-span-3 lg:col-start-1 lg:row-start-1 row-start-2"
        color="bg-hunyadi-yelow"
        media3={0}
        media5={1}
      />
      <Image
        link="oman/DSC_0701_lfvkhc.jpg"
        alt="omans landscape"
        divClass="lg:row-span-1 lg:col-start-3 lg:row-start-3 lg:row-span-1 row-span-3 col-start-2"
        color="bg-hunyadi-yelow"
        media3={0}
        media5={0}
      />
      <Image
        link="oman/DSC_1285_ldmmzc.jpg"
        alt="mosque"
        divClass="row-span-3 lg:row-start-2 lg:col-span-2 lg:col-start-4 row-start-3 col-start-3"
        color="bg-hunyadi-yelow"
        media3={0}
        media5={1}
      />
      <Image
        link="oman/DSC_0526_eq9sex.jpg"
        alt="tower on the hill"
        divClass="lg:row-span-2 lg:row-start-4 col-span-2 row-span-3 lg:col-span-1"
        color="bg-hunyadi-yelow"
        media3={1}
        media5={0}
      />
      <Image
        link="oman/DSC_1300-1_ujglhc.jpg"
        alt="goverment building"
        divClass="lg:row-span-3 lg:col-span-2 "
        color="bg-hunyadi-yelow"
        media3={0}
        media5={1}
      />
      <Image
        link="oman/DSC_2201-1_styajd.jpg"
        alt="sunset in the mountains"
        divClass="lg:row-span-6 lg:col-span-2 row-span-3 "
        color="bg-hunyadi-yelow"
        media3={0}
        media5={1}
      />
      <Image
        link="oman/DSC_1635_rdllhd.jpg"
        alt="car on a dirt road"
        divClass="lg:row-span-1 "
        color="bg-hunyadi-yelow"
        media3={0}
        media5={0}
      />
      <Image
        link="oman/DSC_2148-1_l4txkc.jpg"
        alt="farm on top of a hill"
        divClass="lg:row-span-6 lg:col-span-3"
        color="bg-hunyadi-yelow"
        media3={0}
        media5={2}
      />
      <Image
        link="oman/DSC_2011-1_tqjjwk.jpg"
        alt="rose farm"
        divClass="row-span-2 lg:col-span-1 col-span-2"
        color="bg-hunyadi-yelow"
        media3={1}
        media5={0}
      />

      <Image
        link="oman/DSC_1699_d8mxxf.jpg"
        alt="abandoned village"
        divClass="lg:row-span-2 "
        color="bg-hunyadi-yelow"
        media3={0}
        media5={0}
      />
    </div>
  </>
);}
