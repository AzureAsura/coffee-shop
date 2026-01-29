import React from 'react';
import { Apple, Play, MapPin } from 'lucide-react'; // Tambah MapPin biar lebih dapet vibes lokasinya
import Link from 'next/link';

const Maps = () => {
    return (
        // Ganti ke bg-white atau stone-50 untuk kesan clean
        <section className="relative w-full bg-[#F9FBF9] py-16 px-6 md:px-10 overflow-hidden rounded-[3rem] mb-5 md:mb-16 mt-16 border border-green-100" id='maps'>
            
            {/* Dekorasi Organik (Pengganti Grid) */}
            <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-green-200/30 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-green-100/40 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                
                <div className="space-y-8">
                    {/* Badge Kecil biar lebih 'Greeny' */}
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                        <MapPin size={16} />
                        Our Greenhouse Location
                    </div>

                    {/* Heading: Ganti text-white jadi text-stone-900 (hampir hitam) */}
                    <h1 className='lg:mb-6 lg:text-[74px] font-black lg:leading-[84px] tracking-[-0.03em] text-[#1A2F1A] md:mb-7 mb-4 text-5xl leading-tight uppercase'>
                        Find Us in <br className="hidden lg:block" /> <span className="text-green-600">The Woods</span>
                    </h1>

                    <p className="text-stone-600 text-lg md:max-w-md leading-relaxed">
                        Nikmati kopi terbaik di tengah suasana asri. Rute tercepat menuju ketenangan sudah kami siapkan untukmu.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href='https://maps.app.goo.gl/scFbRSXDupahz4HY8' target='_blank' 
                            className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-black/90 hover:shadow-lg transition-all w-full sm:w-auto">
                            <Play size={20} fill="currentColor" />
                            Google Maps
                        </Link>

                        <Link href='https://maps.apple.com/...' target='_blank' 
                            className="flex items-center justify-center gap-3 border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-all w-full sm:w-auto">
                            <Apple size={24} fill="currentColor" />
                            Apple Maps
                        </Link>
                    </div>
                </div>

                <div className="relative flex justify-end items-center h-[350px] md:h-[500px]">

                    <div className="relative w-full h-full max-w-[420px] bg-white p-3 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.1825743107465!2d115.22293379999999!3d-8.6741809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24187c353d7bf%3A0x68ef6d59156f5559!2sTwenty%20One%20Coffee%26Eatery!5e0!3m2!1sid!2sid!4v1769678724479!5m2!1sid!2sid" 
                            width="100%"
                            height="100%"
                            className="rounded-[2.2rem]"
                            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>


                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-500/20 rounded-full blur-2xl"></div>
                </div>

            </div>
        </section>
    );
};

export default Maps;