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
      <div className="grid grid-cols-5">
        <Art
          link="https://media.githubusercontent.com/media/DelfosseDoran/portfolio/main/portfolio/src/assets/photos/art/blauw-rood-druk.jpg"
          alt="Digital Art"
          start="col-start-1 row-start-2"
          row="row-span-3"
        />
        <Art
          link="https://media.githubusercontent.com/media/DelfosseDoran/portfolio/main/portfolio/src/assets/photos/art/blokken.jpg"
          alt="Digital Art"
          start="col-start-3"
          row="row-span-3"
        />
        <Art
          link="https://media.githubusercontent.com/media/DelfosseDoran/portfolio/main/portfolio/src/assets/photos/art/clos-up-dier.jpg"
          alt="Digital Art"
          start="col-start-4 "
          row="row-span-3"
        />
        <Art
          link="https://media.githubusercontent.com/media/DelfosseDoran/portfolio/main/portfolio/src/assets/photos/art/fooroskoop.jpg"
          alt="Digital Art"
          start="col-start-5 row-start-3"
          row="row-span-2"
        />
        <Art
          link="https://media.githubusercontent.com/media/DelfosseDoran/portfolio/main/portfolio/src/assets/photos/art/getal.jpg"
          alt="Digital Art"
          start="1"
          col="col-span-2"
          row="row-span-3"
        />
        <Art
          link="https://media.githubusercontent.com/media/DelfosseDoran/portfolio/main/portfolio/src/assets/photos/art/stuk-groentefruit.jpg"
          alt="Digital Art"
        />

        <Art
          link="https://media.githubusercontent.com/media/DelfosseDoran/portfolio/main/portfolio/src/assets/photos/art/portret.png"
          alt="Digital Art"
          start="1"
          row="row-span-3"
        />
        <Art
          link="https://media.githubusercontent.com/media/DelfosseDoran/portfolio/main/portfolio/src/assets/photos/art/klonen.jpg"
          alt="Digital Art"
          start="1"
          row="row-span-3"
          col="col-span-2"
        />
          <Art
            link="https://media.githubusercontent.com/media/DelfosseDoran/portfolio/main/portfolio/src/assets/photos/art/space.jpg"
            alt="Digital Art"
            start="1"
            col="col-span-2"
            
          />
            <Art
              link="https://media.githubusercontent.com/media/DelfosseDoran/portfolio/main/portfolio/src/assets/photos/art/transpatuur.jpg"
              alt="Digital Art"
              start="1"
              row="row-span-3"
            />
        <Art
          link="https://media.githubusercontent.com/media/DelfosseDoran/portfolio/main/portfolio/src/assets/photos/art/trap.jpg"
          alt="Digital Art"
          start="1"
          row="row-span-3"
        />
      </div>
    </>
  );
};
