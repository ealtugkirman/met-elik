import React from 'react';

// import logo
import Logo from '../assets/Logo2.webp'

// import data


const Footer = () => {
  return (


<footer className="p-4 bg-white text-center shadow md:px-6 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src={Logo} className="h-8 mr-3" alt="MetCelik Logo Yem besi ürünleri ankara" />
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-first sm:mb-0">
            <p>
            Ahi Evran Caddesi No: 69-71 Ostim / ANKARA / TÜRKİYE <br /> Tel : +90 312 385 50 89 <br /> E-Posta : metcelik@metcelik.com.tr
            </p>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-first sm:text-center">© 2023 <a href="https://ealtugk.dev/" className="hover:underline">ealtugk</a>. All Rights Reserved.
    </span>
</footer>


  );
};

export default Footer;