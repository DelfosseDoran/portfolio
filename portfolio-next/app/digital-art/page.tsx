import Imgage from '../../components/Image';

export default () => {
  return (
    <>
      <h1 className="mx-auto mb-8 w-4/5 text-center text-2xl sm:text-3xl font-semibold">
        Art is everywhere. In this digital world it's easy to find. I like
        making my own digital art. I'm doing it for quite a long time. This
        website is part of it: see for yourself!{' '}
      </h1>
      <div className="sm:grid grid-cols-3 lg:grid-cols-5">
        <Imgage
          link="art/blauw-rood-druk_nbirx7.jpg"
          alt="Digital Art"
          divClass="lg:col-start-1 row-start-2 row-span-3"
        />
        <Imgage
          link="art/blokken_qindmy.jpg"
          alt="Digital Art"
          divClass="lg:col-start-3 lg:row-start-1 col-start-2 row-start-3 row-span-3"
        />
        <Imgage
          link="art/clos-up-dier_ma2fzr.jpg"
          alt="Digital Art"
          divClass="lg:col-start-4  row-start-1 row-span-3"
        />
        <Imgage
          link="art/fooroskoop_wbhvuf.jpg"
          alt="Digital Art"
          divClass="lg:col-start-5 lg:row-start-3 row-span-3"
        />
        <Imgage
          link="art/getal_ipvya4.jpg"
          alt="Digital Art"
          divClass="lg:col-span-2 lg:row-span-4 row-span-2"
        />
        <Imgage
          link="art/stuk-groentefruit_yxw1as.jpg"
          alt="lg:Digital Art"
          divClass="row-span-2"
        />

        <Imgage
          link="art/portret_mro6gt.png"
          alt="Digital Art"
          divClass="row-span-3"
        />
        <Imgage
          link="art/klonen_onhzjg.jpg"
          alt="Digital Art"
          divClass="lg:row-span-4 row-span-3 lg:col-span-2"
        />
        <div className="lg:hidden row-span-2 bg-royal-purple dark:bg-raspberry-rose"></div>
        <Imgage
          link="art/space_zmmzyx.jpg"
          alt="Digital Art"
          divClass="col-span-2"
        />
        <Imgage
          link="art/transpatuur_plqbyg.jpg"
          alt="Digital Art"
          // row="row-span-3"
        />
        <div className=" col-span-3 bg-royal-purple dark:bg-raspberry-rose"></div>
        {/* <Art
          link="https://media.githubusercontent.com/media/DelfosseDoran/portfolio/main/portfolio/src/assets/photos/art/trap.jpg"
          alt="Digital Art"
          start="1"
          row="row-span-3"
        /> */}
      </div>
      <div className="absolute bg-royal-purple dark:bg-raspberry-rose w-full h-12"></div>
    </>
  );
};
