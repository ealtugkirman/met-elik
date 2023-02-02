import React from 'react'
import Factory from '../assets/factory.svg'
import Catalog from '../assets/catalog.svg'
import Banner from '../assets/Banner-Final.webp'
import { motion } from 'framer-motion'
import { fadeIn } from '../Variants'



function Hero() {
    return (
        <div className='bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-green-500 via-neutral-600 to-orange-300'>
            <section className='min-h-[600px] pt-16'>
                <div className='container mx-auto min-h-[600px]  lg:px-24 px-4 mt-12 lg:mt-2 flex justify-center items-center'>
                    <div className='flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 pt-8 lg:pt-0 lg:flex-row items-center justify-center text-center lg:text-left'>
                        {/* Text */}
                        <motion.div variants={fadeIn('right', 0.5)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.3}} className='flex-1 lg:basis-2/5'>
                            {/* <h1 className='font-russo tracking-wider  lead text-first mb-2 lg:mb-5 text-4xl lg:text-7xl'>
                                METÇELİK
                            </h1> */}
                            <img src={Banner} alt="" />
                            <p className='lead text-md text-slate-200 tracking-wide font-russo '>
                                Makine imalatı hususunda yıllardır Türk Sanayisine hizmet veren MET ÇELİK, bu süre içerisinde gelişen mesleki bilgi ve deneyimiyle birlikte bir çok sektörün ihtiyacına cevap verecek makine imalatı gerçekleştirmektedir.
                            </p>
                            
                            <div className='flex border border-double shadow-2xl border-slate-600  mt-0 items-center justify-center max-w-sm lg:max-w-full pt-4 pb-4 mx-auto lg:mx-0 gap-x-2 lg:gap-x-6'>
                                <button className='btn font-robo text-slate-200 lg:ml-0 flex lg:gap-x-4'>
                                Online kataloğumuzu indirmek <br /> için tıklayın
                                </button>
                                <img  className='w-[100px]' src={Catalog} alt="" />
                            </div>
                            
                        </motion.div>
                        {/* İmage */}
                        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" whileInView={"show"} viewport={{once:true, amount: 0.3}} className='flex-1  lg:basis-3/5'>
                            <img src={Factory} alt='' />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero