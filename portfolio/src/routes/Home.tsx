import { Link } from 'react-router-dom';
import Links from '../components/Link';
import { Github, Instagram, Mail, Linkedin } from 'lucide-react';

export default () => {
  const date = new Date();
  const month = date.getMonth();
  return (
    <main className=" h-full">
      <div className=" lg:flex  justify-between flex-col h-full">
        <div className="lg:flex justify-center overflow-hidden lg:pb-8">
          <div className="lg:w-2/4 ">
            <div className=" md:mr-10 md:mb-12">
              <h1 className=" p-4 text-2xl sm:text-5xl font-bold text-raisin-black-700 text-center lg:text-left">
                Hey, I am Doran Delfosse and this website you will learn more
                about me.
              </h1>
              {month === 5 ? <p className="pl-4">🌈happy pride🌈</p> : null}
            </div>
            <div className="lg:-ml-1/4 flex bg-cool-grey w-screen ">
              <div className="lg:ml-1/8 sm:flex lg:w-2/4 p-4 font-medium">
                <div>
                  <h2 className="mb-2 text-2xl sm:text-3xl font-medium">
                    Schools:
                  </h2>
                  <div className="pl-2">
                    <h3 className="text-xl">VTI Waregem (2015 - 2021)</h3>
                    <div className="pl-2">
                      <p>2015 - 2016 Technology</p>
                      <p>2016 - 2017 Mechanics Electricity</p>
                      <p>2017 - 2019 Electricity Electronics</p>
                      <p>2019 - 2021 Industrial Informatics</p>
                    </div>
                    <h3 className="text-xl">Howest (2021 - now)</h3>
                    <div className="pl-2">
                      <p>2021 - 2022 Multimedia en Creative Technology</p>
                      <p>
                        2022 - now Multimedia en Creative Technology (Next Web
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
              <h1 className="mb-2 text-2xl sm:text-3xl font-medium">
                Projects
              </h1>
              <p>
                Learn more about the projects I made. Be sure to check out what
                was made and how it was done.
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
                Check out the works that I have already made. Everything is made
                with photoshop or illustrator.
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
        <footer className="   bg-cool-grey lg:bg-transparent  w-full items-center  lg:px-0 lg:w-3/4 mx-auto">
          <div className="flex gap-2 justify-between p-4 ">
            <div className=" gap-4">
              <h1 className=" mb-2 text-2xl sm:text-3xl font-medium">
                Contact me
              </h1>
              <p className="">Get in touch.</p>
            </div>
            <div className="sm:flex justify-end gap-4 items-center sm:flex-row grid grid-cols-2">
              <a
                href="mailto:doran.delfosse@gmail.com"
                className="p-2 lg:bg-raisin-black-200 w-fit h-fit lg:focus:bg-raisin-black-400 lg:hover:bg-raisin-black-400"
              >
                <Mail className=" stroke-raisin-black-600 lg:stroke-raisin-black-500 focus:stroke-raisin-black-700 hover:stroke-raisin-black-700 w-8 h-8 sm:w-12 sm:h-12" />
              </a>
              <a
                href="https://www.instagram.com/dorandelfosse/"
                className="p-2 lg:bg-raisin-black-200 w-fit h-fit lg:focus:bg-raisin-black-400 lg:hover:bg-raisin-black-400"
              >
                <Instagram className=" stroke-raisin-black-600 lg:stroke-raisin-black-500 focus:stroke-raisin-black-700 hover:stroke-raisin-black-700 w-8 h-8 sm:w-12 sm:h-12" />
              </a>
              <a
                href="https://github.com/DelfosseDoran"
                className="p-2 lg:bg-raisin-black-200 w-fit h-fit lg:focus:bg-raisin-black-400 lg:hover:bg-raisin-black-400"
              >
                <Github className="stroke-raisin-black-600 lg:stroke-raisin-black-500 focus:stroke-raisin-black-700 hover:stroke-raisin-black-700 w-8 h-8 sm:w-12 sm:h-12" />
              </a>
              <a
                href="https://be.linkedin.com/in/doran-delfosse-684290283"
                className="p-2 lg:bg-raisin-black-200 w-fit h-fit lg:focus:bg-raisin-black-400 lg:hover:bg-raisin-black-400"
              >
                <Linkedin className="stroke-raisin-black-600 lg:stroke-raisin-black-500 focus:stroke-raisin-black-700 hover:stroke-raisin-black-700 w-8 h-8 sm:w-12 sm:h-12" />
              </a>
            </div>
          </div>
          <div className="bg-cool-grey lg:bg-transparent w-full h-12"></div>
        </footer>
      </div>
    </main>
  );
};
