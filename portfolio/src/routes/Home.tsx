import { Link } from 'react-router-dom';
import Links from '../components/Link';

export default () => {
  return (
    <main>
      <div className=" lg:flex justify-center ">
        <div className="lg:w-2/4">
          <h1 className=" md:mr-10 md:mb-12 p-4 text-2xl sm:text-5xl font-bold text-raisin-black-700 text-center lg:text-left">
            Hey I am Doran Delfosse and with this website you will learn more
            about me.
          </h1>
          <div className="lg:-ml-1/4 flex w-screen bg-cool-grey ">
            <div className="lg:ml-1/8 sm:flex lg:w-2/4 p-4 font-medium">
              <div>
                <h2 className="mb-2 text-2xl sm:text-3xl font-medium">
                  Schools:
                </h2>
                <div className="pl-2">
                  <h3 className="text-xl">VTI Waregem (2015 - 2021)</h3>
                  <div className="pl-2">
                    <p>2015 - 2016 Technology</p>
                    <p>2016 - 2017 Mecanics Electricity</p>
                    <p>2017 - 2019 Electricity Electronics</p>
                    <p>2019 - 2021 year Industrial Informatics</p>
                  </div>
                  <h3 className="text-xl">Howest (2021 - now)</h3>
                  <div className="pl-2">
                    <p>2021 - 2022 Multimedia en Creatieve Technologie</p>
                    <p>
                      2022 - now Multimedia en Creatieve Technologie (Next Web
                      Developer)
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-2 text-2xl sm:text-3xl">Work:</h2>
                <div>
                  <p>(2019-now) </p>
                  <p>’t Houtvuur</p>
                  <p>waiter (working student)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit lg:w-1/4 bg-Feldgrau p-4 text-lemon-chiffon">
          <div>
            <h1 className="mb-2 text-2xl sm:text-3xl font-medium">Projects</h1>
            <p>
              Learn more about the pojects I made. Be sure to check out what was
              made and how it was done.
            </p>
            <div className="flex justify-end">
              <Links
                link="/projects"
                text="learn more"
                colorText="text-bg-lemon-chiffon"
                colorbg2="peer-hover:bg-lemon-chiffon"
                color="focus:ring-lemon-chiffon"
              />
            </div>
          </div>
          <div>
            <h1 className="mb-2 text-2xl sm:text-3xl font-medium">
              Digital Art
            </h1>
            <p>
              Check out the works that I have already made. everything is made
              with photoshop or ilustraitor.
            </p>
            <div className="flex justify-end">
              <div className="relative mx-1 flex flex-col ">
                <Links
                  link="/digital-art"
                  text="learn more"
                  colorText="text-bg-lemon-chiffon"
                  colorbg2="peer-hover:bg-lemon-chiffon"
                  color="focus:ring-lemon-chiffon"
                />
                <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-y-50 scale-x-0 bg-lemon-chiffon duration-200 peer-hover:scale-x-100"></span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mb-2 text-2xl sm:text-3xl font-medium">
              Photography
            </h1>
            <p>
              {' '}
              I love travelling, I love nature and I love photography so I
              started combining them. Now take a look at where I went.
            </p>
            <div className="flex justify-end">
              <Links
                link="/photography"
                text="learn more"
                colorText="text-bg-lemon-chiffon"
                colorbg2="peer-hover:bg-lemon-chiffon"
                color="focus:ring-lemon-chiffon"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
