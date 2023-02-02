import React from 'react';

// import logo
import Logo from '../assets/Logo2.webp'

// import data


const Footer = () => {
  return (
    
<footer className="p-4 container mx-auto bg-white shadow md:px-6 md:py-8">
    <div className="flex items-center space-x-6 text-center mx-auto sm:justify-between">
        <a href="https:/ealtugk.dev" className="flex  mb-4 sm:mb-0">
            <img src={Logo} className="h-8 ml-3" alt="Met Çelik" />
            <span className=" ml-36 text-md text-black"> Ahi Evran Caddesi No: 69-71
Ostim / ANKARA / TÜRKİYE <br/> Tel : +90 312 385 50 89 <br /> E-Posta : metcelik@metcelik.com.tr
 </span>
        </a>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©<a href="https://ealtugk.dev/" className="hover:underline">ealtugk</a>. All Rights Reserved.
    </span>
</footer>

  );
};

export default Footer;