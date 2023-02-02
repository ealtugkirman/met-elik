import React from 'react';

// import logo
import Logo from '../assets/Logo2.webp'

// import data


const Footer = () => {
    return (

        <footer className="p-4 bg-white shadow">
            <div className="  space-y-2 lg:space-x-5 lg:flex-row container mx-auto '">
                <div className='container flex-col lg:flex items-center'>
                <a href="https:/ealtugk.dev" className="mb-4 mx-auto sm:mb-0">
                    <img src={Logo} className="h-8 ml-3" alt="Met Çelik" />
                </a>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div>
                    <p className=" mx-auto text-md text-black"> Ahi Evran Caddesi No: 69-71
                        Ostim / ANKARA / TÜRKİYE <br /> Tel : +90 312 385 50 89 <br /> E-Posta : metcelik@metcelik.com.tr
                    </p>
                </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">©<a href="https://ealtugk.dev/" className="hover:underline">ealtugk</a>. All Rights Reserved.
            </span>
        </footer>

    );
};

export default Footer;