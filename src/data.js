// import images
import Logo from '../src/assets/Banner-Logo1.webp';
import Features1Img from './assets/MetÇelik-yem.jpg'
import Features2Img from './assets/Fayans.svg'
import Features3Img from './assets/MetÇelik-yem.jpg'
import Features4Img from './assets/Fayans.svg'
// ChairImg , BedImg, CupboardImg, LightingImg
import ChairImg from './assets/catalog.svg'
import BedImg from './assets/factory.svg'
import CupboardImg from './assets/catalog.svg'
import LightingImg from './assets/factory.svg'
import Product1Img from './assets/catalog.svg'
import Product2Img from './assets/catalog.svg'
import Product3Img from './assets/catalog.svg'
import Product4Img from './assets/catalog.svg'
import Product5Img from './assets/catalog.svg'
import Product6Img from './assets/catalog.svg'
import Product7Img from './assets/catalog.svg'
import Product8Img from './assets/catalog.svg'
import Product9Img from './assets/catalog.svg'
import Product10Img from './assets/catalog.svg'


import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  // IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from 'react-icons/io';



import { GrFacebookOption } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoPinterest,
  IoLogoTwitter,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Kurumsal' },
    { href: '/', name: 'Ürünler' },
    { href: '/', name: 'Belgelerimiz' },
    { href: '/', name: 'Foto Galeri' },
    { href: '/', name: 'Referanslar' },
    { href: '/', name: 'İletişim' },
  ],
};

export const socialData = [
  { href: '/', icon: <GrFacebookOption /> },
  { href: '/', icon: <IoLogoInstagram /> },
  { href: '/', icon: <IoLogoPinterest /> },
  { href: '/', icon: <IoLogoTwitter /> },
  { href: '/', icon: <IoLogoYoutube /> },
];

export const features = {
  image: <Features1Img />,
  title: 'Yem Fabrikaları',
  subtitle:
    'Makine imalatı hususunda yıllardır Türk Sanayisine hizmet veren MET ÇELİK, bu süre içerisinde gelişen mesleki bilgi ve deneyimiyle birlikte bir çok sektörün ihtiyacına cevap verecek makine imalatı gerçekleştirmektedir.',
  buttonText: 'Show Now',
  feature2: {
    image: <Features2Img />,
    title: 'Fayans Yapıştırıcı Tesisi',
    subtitle:
    'Uzmanlaşma çağı" olan 21. yüzyılın gereklerine uygun olarak firmamız, geçen süre içerisinde ürün yelpazesini sınırlandırarak 1992 yılından bu yana, sadece "Tarım ve Maden Makinaları" konusunda ihtisaslaşmıştır.',
  },
  feature3: {
    image: <Features3Img />,
    title: 'Paletleme Üniteleri',
    subtitle:
    'Büyük - Küçükbaş hayvan yemi, kanatlı hayvan yemi, balık yemi, organik gübre, plastik hurda, çöp, ağaç talaşı, kepek, küspe, pamuk çiğidi gibi çeşitli ürünlerin preslenmesi için üretilmiştir.'
  },
  feature4: {
    image: <Features4Img />,
    title: 'Yedek Parça ve Ekipmanları',
    subtitle:
    'Anahtar teslimi yem fabrikaları, özel yem makinaları ve yedek parçları, fayans yapıştırıcı ve imalat tesisleri üreten MET ÇELİK, satış sonrası servis hizmeti noktasındada müşterinin yanında olmaktadır.'
  },
};






export const footerData = {
  about: {
    title: 'About void tattoo',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: <FaMapMarkerAlt />,
      name: '1630 Elm Drive, New York City',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+49 34 36573355',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'contact@yourcompany.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '/', name: 'About me' },
      { href: '/', name: 'My gallery' },
      { href: '/', name: 'My services' },
      { href: '/', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 9:00pm' },
      { name: 'Sat / 10:00 - 6:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
};

export const products = {
  title: 'Tüm Ürünler',
  subtitle:
    'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Ceiling Light',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Wood Chair',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Treos Seroes 911',
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Multi bilderman slibber',
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'XORA corner desk',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Black Forest Series Wood',
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Papper Cupboard',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Ole Gundorse Spring',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
  ],
};


export const newInStore = {
  title: 'New In Store Now',
  subtitle: 'Get the latest items immediately with promo prices',
  link: 'Check all',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'chair',
      image: <ChairImg />,
    },
    {
      name: 'bed',
      image: <BedImg />,
    },
    {
      name: 'cupboard',
      image: <CupboardImg />,
    },
    {
      name: 'lighting',
      image: <LightingImg />,
    },
  ],
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoLogoFacebook />,
      href: '#',
    },
  ],
  copyright: 'FurniShop 2022 - All Rights Reserved.',
};