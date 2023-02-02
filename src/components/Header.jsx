import React, { useState, useEffect } from 'react';
// import header data
// import components
import logo from '../assets/Banner-Logo1.webp'
import Nav from './Nav';
import NavMobile from './NavMobile';
// import Socials from './Socials';
// import icons
import { TiThMenuOutline } from 'react-icons/ti';

const Header = () => {
  // destructure header data
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? 'h-[70px] lg:h-[85px] shadow-lg' : 'h-[110px] lg:h-[105px]'
      }  border-b shadow-2xl bg-gradient-to-r from-slate-400 to-transparent border-cyan-900 fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className='flex justify-between items-center h-full lg:pl-[150px] pl-[50px]'>
        {/* logo */}
        <a href='/'>
          <img className='w-[225px] h-[65px]' src={logo} alt='' />
        </a>
        {/* nav - initially is hidden - show on desktop*/}
        <div className='hidden xl:flex'>
          <Nav />
        </div>
        {/* nav menu btn - is showing by default - hidden on desktop mode */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className='xl:hidden absolute right-[5%] bg-dark p-2 rounded-md cursor-pointer'
        >
          <TiThMenuOutline className='text-3xl text-third' />
        </div>
        {/* nav mobile - is showing by default - hidden on desktop mode */}
        <div
          className={`${navMobile ? 'max-h-full' : 'max-h-0 overflow-hidden'} ${
            isActive
              ? 'top-[100px] lg:top-[110px]'
              : 'top-[120px] lg:top-[150px]'
          } fixed left-0 -z-10 w-full h-full bg-white transition-all duration-300`}
        >
          <NavMobile />
        </div>
        {/* social icons - initially hidden - is showing on desktop mode */}
       
      </div>
    </header>
  );
};

export default Header;