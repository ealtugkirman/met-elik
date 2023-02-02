import React from 'react';
// import nav data
import { navData } from '../data';

const Nav = () => {
  // destructure nav data
  const { items } = navData;
  return (
    <nav>
      <ul className='flex mr-32 gap-x-[42px]'>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a
                className='link hover:border-b-2  font-bold font-robo text-first text-lg hover:border-red-500 transition duration-500'
                href='/'
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;