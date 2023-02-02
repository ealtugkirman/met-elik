import React from 'react'
import Features1Img from '../assets/MetÇelik-yem.jpg'
import Features2Img from '../assets/Fayans.svg'
import Features3Img from '../assets/Palet.jpg'


function Try
    () {
    return (
        <div className='bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] lg:flex from-blue-900 via-neutral-900 to-amber-500 py-20'>
            <section className=' flex-col flex  space-y-2 lg:space-x-5 lg:flex-row container mx-auto ' >
                <div className='container py-10 rounded-3xl text-white items-center bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-green-500 via-neutral-600 to-orange-300 border-white shadow-2xl font-robo px-4 border mx-auto  min-h-[200px] lg:min-h-[550px] max-w-[350px] lg:max-w-none basis-1/4'>
                    <img src={Features1Img} className='mx-auto rounded-full  w-[100px] h-[100px] lg:lg:w-[150px] lg:h-[150px]' alt='' />
                    <h1 className='text-3xl text-center py-4'>
                        Yem Fabrikaları <br /> <br />
                    </h1>
                    <p className='text-center'>
                    Makine imalatı hususunda yıllardır Türk Sanayisine hizmet veren MET ÇELİK, bu süre içerisinde gelişen mesleki bilgi ve deneyimiyle birlikte bir çok sektörün ihtiyacına cevap verecek makine imalatı gerçekleştirmektedir.
                    </p>
                    <button className='mx-auto my-3 py-1 bg-first rounded-full text-white border border-red-600 justify-center place-items-end container'>
                        Ürüne git
                    </button>
                </div>
                <div className='container py-10 rounded-3xl text-white items-center bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-green-500 via-neutral-600 to-orange-300 border-white shadow-2xl font-robo px-4 border mx-auto  min-h-[200px] lg:min-h-[550px] max-w-[350px] lg:max-w-none basis-1/4'>
                    <img src={Features2Img} className='mx-auto rounded-full  w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]' alt='' />
                    <h1 className='text-3xl text-center py-4'>
                        Fayans Yapıştırıcı Tesisi
                    </h1>
                    <p className='text-center'>
                        Uzmanlaşma çağı" olan 21. yüzyılın gereklerine uygun olarak firmamız, geçen süre içerisinde ürün yelpazesini sınırlandırarak 1992 yılından bu yana, sadece "Tarım ve Maden Makinaları" konusunda ihtisaslaşmıştır.
                    </p>
                    <button className='mx-auto my-3 py-1 bg-first rounded-full text-white border border-red-600 justify-center place-items-end container'>
                        Ürüne git
                    </button>

                </div>
                <div className='container py-10 rounded-3xl text-white items-center bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-green-500 via-neutral-600 to-orange-300 border-white shadow-2xl font-robo px-4 border mx-auto  min-h-[200px] lg:min-h-[550px] max-w-[350px] lg:max-w-none basis-1/4'>
                    <img src={Features3Img} className='mx-auto rounded-full  w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]' alt='' />
                    <h1 className='text-3xl text-center py-4'>
                        Paletleme Üniteleri <br /> <br />
                    </h1>
                    <p className='text-center'>
                    Büyük - Küçükbaş hayvan yemi, kanatlı hayvan yemi, balık yemi, organik gübre, plastik hurda, çöp, ağaç talaşı, kepek, küspe, pamuk çiğidi gibi çeşitli ürünlerin daha efektif preslenmesi için üretilmiştir.
                    </p>
                    <button className='mx-auto my-3 py-1 bg-first rounded-full text-white border border-red-600 justify-center place-items-end container'>
                        Ürüne git
                    </button>

                </div>
                <div className='container py-10 rounded-3xl text-white items-center bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-green-500 via-neutral-600 to-orange-300 border-white shadow-2xl font-robo px-4 border mx-auto  min-h-[200px] lg:min-h-[550px] max-w-[350px] lg:max-w-none basis-1/4'>
                    <img src={Features1Img} className='mx-auto rounded-full  w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]' alt='' />
                    <h1 className='text-3xl text-center py-4'>
                        Yedek Parça ve Ekipmanları
                    </h1>
                    <p className='text-center'>
                        Anahtar teslimi yem fabrikaları, özel yem makinaları ve yedek parçları, fayans yapıştırıcı ve imalat tesisleri üreten MET ÇELİK, satış sonrası servis hizmeti noktasındada müşterinin yanında olmaktadır.
                    </p>
                    <button className='mx-auto my-3 py-1 bg-first rounded-full text-white border border-red-600 justify-center place-items-end container'>
                        Ürüne git
                    </button>

                </div>
            </section>
        </div>
    )
}

export default Try
