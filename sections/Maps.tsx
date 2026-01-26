import React from 'react';
import { Apple, Play } from 'lucide-react';
import Link from 'next/link';

const Maps = () => {
    return (
        <section className="relative w-full bg-[#292C27] py-10 px-6 md:px-10 overflow-hidden rounded-3xl mb-5 md:mb-16 mt-16">

            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

                <div className="text-white space-y-8">
                    <h1 className='lg:mb-6 lg:text-[74px] font-black lg:leading-[84px] tracking-[-0.03em] text-white md:mb-7 mb-4 text-5xl leading-tight uppercase'>
                        Find Us on <br className="hidden lg:block" /> the Map
                    </h1>

                    <p className="text-stone-300 text-lg md:max-w-md leading-relaxed">
                        Get the fastest route to our doorstep and enjoy the perfect brew. Your next favorite spot is just a click away.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">

                        <Link href='https://maps.app.goo.gl/scFbRSXDupahz4HY8' target='_blank' className="flex items-center justify-center gap-3 border-2 border-stone-600 text-white px-8 py-4 rounded-full font-bold hover:bg-stone-800 transition-all w-full sm:w-auto">
                            <Play size={20} fill="currentColor" />
                            Google Maps
                        </Link>

                        <Link href='https://maps.apple.com/place?address=Jalan%20Batusari%203%20No.%206,%20Denpasar,%20Bali%2080237,%20Indonesia&coordinate=-8.674181,115.222934&name=Twenty%20One%20Coffee%26Eatery&place-id=IF79F2C9E69805D1C&map=explore' target='_blank' className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-stone-200 transition-all w-full sm:w-auto">
                            <Apple size={24} fill="currentColor" />
                            Maps
                        </Link>
                    </div>
                </div>


                <div className="relative flex justify-end items-center h-[350px] md:h-[500px]">

                    <div className="relative w-full h-full max-w-[400px] bg-stone-800 p-3 rounded-[2.5rem] shadow-2xl border-4 border-stone-700 overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.1825743107465!2d115.22293379999999!3d-8.6741809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24187c353d7bf%3A0x68ef6d59156f5559!2sTwenty%20One%20Coffee%26Eatery!5e0!3m2!1sid!2sid!4v1768991452043!5m2!1sid!2sid"
                            width="100%"
                            height="100%"
                            className="rounded-[1.8rem]"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>


                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
                </div>

            </div>
        </section>
    );
};

export default Maps;