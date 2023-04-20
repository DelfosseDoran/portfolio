import Art from '../components/Art';

export default () => {
  return (
    <>
      <h1 className="mx-auto mb-8 w-4/5 text-center text-2xl sm:text-3xl font-semibold">
        Art is something that is everywhere and in this digital world even more
        than ever. I also think it's cool to make my own digital art. So I have
        been doing this for a long time and here you can see my best works. But
        this website is definitely part of it too.
      </h1>
      <div className="sm:grid grid-cols-3 lg:grid-cols-5">
        <Art
          link="art/blauw-rood-druk_nbirx7.jpg"
          alt="Digital Art"
          divClass="lg:col-start-1 row-start-2 row-span-3"
        />
        <Art
          link="art/blokken_qindmy.jpg"
          alt="Digital Art"
          divClass="lg:col-start-3 lg:row-start-1 col-start-2 row-start-3 row-span-3"
        />
        <Art
          link="art/clos-up-dier_ma2fzr.jpg"
          alt="Digital Art"
          divClass="lg:col-start-4  row-start-1 row-span-3"
        />
        <Art
          link="art/fooroskoop_wbhvuf.jpg"
          alt="Digital Art"
          divClass="lg:col-start-5 lg:row-start-3 row-span-3"
        />
        <Art
          link="art/getal_ipvya4.jpg"
          alt="Digital Art"
          divClass="lg:col-span-2 lg:row-span-4 row-span-2"
          media="(max-width: 400px) 300px, (max-width: 639px) 600px,(max-width:1024px) 200px,(max-width:1536px) 450px,800px"
        />
        <Art
          link="art/stuk-groentefruit_yxw1as.jpg"
          alt="lg:Digital Art"
          divClass="row-span-2"
        />

        <Art
          link="art/portret_mro6gt.png"
          alt="Digital Art"
          divClass="row-span-3"
        />
        <Art
          link="art/klonen_onhzjg.jpg"
          alt="Digital Art"
          divClass="lg:row-span-4 row-span-3 lg:col-span-2"
          media="(max-width: 400px) 300px, (max-width: 639px) 600px,(max-width:1024px) 200px,(max-width:1536px) 450px,800px"
        />
        <div className="lg:hidden row-span-2 bg-royal-purple"></div>
        <Art
          link="art/space_zmmzyx.jpg"
          alt="Digital Art"
          divClass="col-span-2"
          media="(max-width: 400px) 300px, (max-width: 639px) 600px,(max-width:1024px) 450px,(max-width:1536px) 450px,800px"
        />
        <Art
          link="art/transpatuur_plqbyg.jpg"
          alt="Digital Art"
          // row="row-span-3"
        />
        <div className=" col-span-3 bg-royal-purple"></div>
        {/* <Art
          link="https://media.githubusercontent.com/media/DelfosseDoran/portfolio/main/portfolio/src/assets/photos/art/trap.jpg"
          alt="Digital Art"
          start="1"
          row="row-span-3"
        /> */}
      </div>
    </>
  );
};
