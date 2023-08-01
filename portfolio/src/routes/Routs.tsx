import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default () => {
  return (
    <div className=" min-h-screen">
      <Header />
      <Outlet />
      <footer className="flex justify-center opacity-75">
        <div>
          <p>By Doran Delfosse</p>
          <p className="text-center">© 2023</p>
        </div>
      </footer>
    </div>
  );
};
