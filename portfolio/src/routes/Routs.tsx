import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default () => {
  return (
    <div className=''>
      <Header />
      <Outlet />
    </div>
  );
};
