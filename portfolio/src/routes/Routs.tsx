import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import { ArrowBigUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default () => {
  let [scrol, setScrol]= useState(false);

  useEffect(() => {
    scrollFunction();
  }, []);

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (document.documentElement.scrollTop > 20) {
      setScrol(true);
    } else {
      setScrol(false);
    }
  };
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className=" min-h-screen">
      <div>
        <button
          onClick={topFunction}
          id="myBtn"
          title="Go to top"
          className={`z-10 bottom-0 right-0 bg-raisin-black-300 hover:bg-raisin-black-600 text-lemon-chiffon font-bold py-2 px-2 rounded-full mr-4 mb-4 ${
            scrol ? 'fixed' : 'hidden'
          }`}
        >
          <ArrowBigUp />
        </button>
      </div>
      <Header />
      <Outlet />
      <footer className="flex justify-center opacity-75">
        <div>
          <p>By Doran Delfosse</p>
          <p className="text-center">© {(new Date().getFullYear())}</p>
        </div>
      </footer>
    </div>
  );
};
