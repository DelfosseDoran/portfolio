import Links from "../components/Link";
import { Github, Instagram, Mail, Linkedin } from "lucide-react";

const Home = () => {
  const date = new Date();
  const month = date.getMonth();
  return (
    <main className="h-full">
      <div className=" lg:flex  justify-between flex-col h-full">
        <div className="lg:flex justify-center overflow-hidden lg:pb-8">
          <div className="lg:w-2/4 ">
            <div className=" lg:mr-10 md:mb-12">
              <h1 className="text-2xl leading-tight p-4  sm:text-[3rem] font-bold text-raisin-black-700 dark:text-celeste text-center lg:text-left">
                Hey, I'm Doran Delfosse, and on this website, you will learn
                more about me.
              </h1>
              {month === 5 ? <p className="pl-4">🌈happy pride🌈</p> : null}
            </div>
            <div className="lg:-ml-[25%] flex bg-vintage-berry text-lemon-chiffon w-screen dark:bg-midnight-green">
              <div className="lg:ml-[12.5%] sm:flex gap-8 lg:w-2/4 p-4 font-medium">
                <div className="flex flex-col  gap-2">
                  <h2 className="text-2xl sm:text-3xl">Work:</h2>
                  <div className="font-signika text-lg">
                    <p className="font-bold text-xl">
                      Professional Media Group
                    </p>
                    <div className="pl-2">
                      <p>Full-stack web developer</p>
                      <p>(2024-now)</p>
                    </div>
                  </div>
                  <div className="font-signika text-lg">
                    <p className="font-bold text-xl">’t Houtvuur</p>
                    <div className="pl-2">
                      <p>waiter</p>
                      <p>(2019-now)</p>
                    </div>
                  </div>
                  <div className="font-signika text-lg">
                    <p className="font-bold text-xl">Goomyx</p>
                    <div className="pl-2">
                      <p>Full-stack web developer(intern)</p>
                      <p>(2024-2024) </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl sm:text-3xl">Schools:</h2>
                  <div>
                    <h3 className="font-signika font-bold text-xl">
                      VTI Waregem (2015 - 2021)
                    </h3>
                    <div className="pl-2 text-lg">
                      <p>2015 - 2016 Technology</p>
                      <p>2016 - 2017 Mechanics Electricity</p>
                      <p>2017 - 2019 Electricity Electronics</p>
                      <p>2019 - 2021 Industrial Informatics</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-signika font-bold text-xl">
                      Howest (2021 - 2024)
                    </h3>
                    <div className="pl-2 text-lg">
                      <p>2021 - 2022 Multimedia en Creative Technology</p>
                      <p>
                        2022 - 2024 Multimedia en Creative Technology (Next Web
                        Developer)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-pt-2 h-fit lg:w-1/4 ">
            <div className="lg:mt-2 bg-Feldgrau dark:bg-periwinkle dark:text-dark-purple  p-4 text-lemon-chiffon lg:rounded-lg lg:shadow-lg">
              <div>
                <h1 className="mb-2 text-2xl sm:text-3xl font-medium">
                  Projects
                </h1>
                <p className="font-signika text-xl">
                  Learn more about the projects I made. Be sure to check out
                  what was made and how it was done.
                </p>
                <div className="flex justify-end">
                  <Links
                    link="/projects"
                    text="learn more"
                    // colorText="text-lemon-chiffon"
                    colorbg2="peer-hover:bg-lemon-chiffon"
                    color="focus:ring-lemon-chiffon"
                  />
                </div>
              </div>
              <div>
                <h1 className="mb-2 text-2xl sm:text-3xl font-medium">
                  Digital Art
                </h1>
                <p className="font-signika text-xl">
                  Check out the works that I have already made. Everything is
                  made with photoshop or illustrator.
                </p>
                <div className="flex justify-end">
                  <div className="relative mx-1 flex flex-col ">
                    <Links
                      link="/digital-art"
                      text="learn more"
                      // colorText="text-lemon-chiffon"
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
                <p className="font-signika text-xl">
                  I love travelling, I love nature and I love photography so I
                  started combining them. Now take a look at where I went.
                </p>
                <div className="flex justify-end">
                  <Links
                    link="/photography"
                    text="learn more"
                    // colorText="text-lemon-chiffon"
                    colorbg2="peer-hover:bg-lemon-chiffon"
                    color="focus:ring-lemon-chiffon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="  w-full items-center  lg:px-0 lg:w-3/4 mx-auto">
          <div className="flex gap-2 justify-between p-4 ">
            <div className=" gap-4">
              <h1 className=" mb-2 text-2xl sm:text-3xl font-medium">
                Contact me
              </h1>
              <p className="font-signika font-light">Get in touch.</p>
            </div>
            <div className="sm:flex justify-end gap-4 items-center sm:flex-row grid grid-cols-2">
              <a
                href="mailto:doran.delfosse@gmail.com"
                className="p-2 lg:bg-raisin-black-200 w-fit h-fit lg:focus:bg-raisin-black-400 lg:hover:bg-raisin-black-400 rounded-lg dark:lg:bg-platinum dark:lg:hover:bg-celeste dark:lg:focus:bg-celeste"
              >
                <Mail className=" stroke-vintage-berry focus:stroke-raisin-black-700 hover:stroke-raisin-black-700 w-8 h-8 sm:w-12 sm:h-12 dark:stroke-platinum dark:lg:stroke-raisin-black-500 dark:focus:stroke-stroke-raisin-black-700 dark:hover:stroke-stroke-raisin-black-700" />
              </a>
              <a
                href="https://www.instagram.com/dorandelfosse/"
                className="p-2 lg:bg-raisin-black-200 w-fit h-fit lg:focus:bg-raisin-black-400 lg:hover:bg-raisin-black-400 rounded-lg dark:lg:bg-platinum dark:lg:hover:bg-celeste dark:lg:focus:bg-celeste"
              >
                <Instagram className=" stroke-vintage-berry focus:stroke-raisin-black-700 hover:stroke-raisin-black-700 w-8 h-8 sm:w-12 sm:h-12 dark:stroke-platinum dark:lg:stroke-raisin-black-500 dark:focus:stroke-stroke-raisin-black-700 dark:hover:stroke-stroke-raisin-black-700" />
              </a>
              <a
                href="https://github.com/DelfosseDoran"
                className="p-2 lg:bg-raisin-black-200 w-fit h-fit lg:focus:bg-raisin-black-400 lg:hover:bg-raisin-black-400 rounded-lg dark:lg:bg-platinum dark:lg:hover:bg-celeste dark:lg:focus:bg-celeste"
              >
                <Github className="stroke-vintage-berry focus:stroke-raisin-black-700 hover:stroke-raisin-black-700 w-8 h-8 sm:w-12 sm:h-12 dark:stroke-platinum dark:lg:stroke-raisin-black-500 dark:focus:stroke-stroke-raisin-black-700 dark:hover:stroke-stroke-raisin-black-700" />
              </a>
              <a
                href="https://be.linkedin.com/in/doran-delfosse-684290283"
                className="p-2 lg:bg-raisin-black-200 w-fit h-fit lg:focus:bg-raisin-black-400 lg:hover:bg-raisin-black-400 rounded-lg dark:lg:bg-platinum dark:lg:hover:bg-celeste dark:lg:focus:bg-celeste"
              >
                <Linkedin className="stroke-vintage-berry focus:stroke-raisin-black-700 hover:stroke-raisin-black-700 w-8 h-8 sm:w-12 sm:h-12 dark:stroke-platinum dark:lg:stroke-raisin-black-500 dark:focus:stroke-stroke-raisin-black-700 dark:hover:stroke-stroke-raisin-black-700" />
              </a>
            </div>
          </div>
          <div className="absolute lg:hidden bg-transparent w-full h-12"></div>
        </footer>
      </div>
    </main>
  );
};

Home.displayName = "Home"; // optional but explicit for React dev tools

export default Home;
