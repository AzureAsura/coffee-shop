import React from 'react';
import { Instagram, Play, Copy } from 'lucide-react';
import { instagramPlaceholder } from '@/constants';
import Link from 'next/link';

const Follow = () => {

  return (
    <section className="py-20 bg-white" id='follow'>
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-green-600 font-bold text-[10px] md:text-sm tracking-[0.2em] uppercase mb-3 md:mb-4 ml-1">
            Follow kami!
          </span>
          <h2 className="text-[28px] md:text-7xl font-black tracking-[-2px] md:tracking-[-3px] text-[#1A2F1A] uppercase leading-[0.9] md:leading-none">
            @twenty_one.coffee
          </h2>
          
          <Link 
            href="https://www.instagram.com/twenty_one.coffee/" 
            target='_blank'
            className="mt-8 flex items-center gap-2 px-8 py-3 border-2 border-green-600 text-green-600 rounded-full font-bold hover:bg-green-600 hover:text-white transition-all duration-300 active:scale-95 shadow-sm"
          >
            <Instagram size={20} />
            <span>Follow Instagram</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {instagramPlaceholder.map((post) => (
            <Link key={post.id} href={post.url} target='_blank'>
                <div 
                className="group relative aspect-square bg-zinc-100 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                <img
                    src={post.img}
                    alt="Instagram Feed"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute top-4 right-4 z-10 text-white drop-shadow-md">
                    {post.type === 'video' ? <Play size={20} fill="currentColor" /> : <Copy size={18} />}
                </div>

                <div className="absolute inset-0 bg-[#1A2F1A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            
            </Link>
          ))}
        </div>

    </section>
  );
};

export default Follow;