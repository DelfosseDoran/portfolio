import Image from "../../components/Image";

export default () => {return (
  <>
    <h1 className="mx-auto mb-12 lg:mb-24  w-4/5 text-center text-2xl sm:text-3xl font-semibold">
      Oman is the most ostentatious country in the arabian peninsula. I was
      there for 2 weeks and it was a wonderful trip.
    </h1>
    <div className="sm:grid grid-cols-3 lg:grid-cols-5">
      <Image
        link="oman/DSC_0151_ku9esh.jpg"
        alt="red dragonfly"
        divClass="row-span-3"
        color="bg-hunyadi-yelow"
        media3={0}
        media5={0}
      />
      <div className="hidden lg:col-span-1 lg:bg-hunyadi-yelow lg:flex lg:col-start-2"></div>
      <Image
        link="oman/DSC_0701_lfvkhc.jpg"
        alt="omans landscape"
        divClass="row-span-3 row-start-2"
        color="bg-hunyadi-yelow"
        media3={0}
        media5={0}
      />
      <Image
        link="oman/DSC_0526_eq9sex.jpg"
        alt="tower on the hill"
        divClass="row-span-4 col-span-2 lg:row-span-4 lg:row-start-3 lg:col-start-3"
        color="bg-hunyadi-yelow"
        media3={1}
        media5={0}
      />
      <Image
        link="oman/DSC_1285_ldmmzc.jpg"
        alt="mosque"
        divClass="row-span-4 lg:col-span-2 lg:row-span-3"
        color="bg-hunyadi-yelow"
        media3={0}
        media5={1}
      />
      <Image
        link="oman/DSC_1699_d8mxxf.jpg"
        alt="abandoned village"
        divClass="row-span-2 lg:row-span-2"
        color="bg-hunyadi-yelow"
        media3={0}
        media5={0}
      />
      <Image
        link="oman/DSC_1300-1_ujglhc.jpg"
        alt="goverment building"
        divClass="row-span-2 lg:row-span-1 lg:col-span-3"
        color="bg-hunyadi-yelow"
        media3={0}
        media5={2}
      />
      <Image
        link="oman/DSC_2201-1_styajd.jpg"
        alt="sunset in the mountains"
        divClass="row-span-2 lg:row-span-1 lg:col-span-3 lg:row-span-2"
        color="bg-hunyadi-yelow"
        media3={0}
        media5={2}
      />
      <Image
        link="oman/DSC_1635_rdllhd.jpg"
        alt="car on a dirt road"
        divClass="row-span-3 col-span-2 lg:col-span-1 lg:row-span-1"
        color="bg-hunyadi-yelow"
        media3={1}
        media5={0}
      />
      <Image
        link="oman/DSC_2148-1_l4txkc.jpg"
        alt="farm on top of a hill"
        divClass="row-span-1 lg:col-span--3 lg:row-span-1"
        color="bg-hunyadi-yelow"
        media3={0}
        media5={0}
      />
      <Image
        link="oman/DSC_2011-1_tqjjwk.jpg"
        alt="rose farm"
        divClass="row-span-2 lg:col-span-2 lg:row-span-1"
        color="bg-hunyadi-yelow"
        media3={0}
        media5={1}
      />
      <div className="bg-hunyadi-yelow col-span-2 lg:hidden"></div>
    </div>
    <div className="absolute bg-hunyadi-yelow w-full h-12"></div>
  </>
);}
