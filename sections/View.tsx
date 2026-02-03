import { Layout, Hammer, Heart, Sparkles, Award, Leaf, Instagram, TreePine, Ban, Wifi, Wind, PlugZap, CigaretteIcon } from 'lucide-react';
import SliderCard from '@/components/SliderCard';

export default function View() {
    const slides = [
        {
            features: [
                { icon: <Instagram size={24} />, title: "Instagramable" },
                { icon: <TreePine size={24} />, title: "asri & natural" },
                { icon: <CigaretteIcon size={24} />, title: "smoking area" },
            ],
            image: "/outdoor.jpg",
            header: 'Outdoor',
            imagePosition: "left"
        },
        {
            features: [
                { icon: <Wifi size={24} />, title: "Free wifi" },
                { icon: <Wind size={24} />, title: "sejuk ber-AC" },
                { icon: <PlugZap size={24} />, title: "Ready Colokan" },
            ],
            image: "/indoor.jpg",
            header: 'Indoor',
            imagePosition: "right"
        }
    ];

    return (
        <section className="w-full bg-white pb-16  relative" id='view'>
            <div className="max-w-7xl mx-auto">
                <SliderCard slides={slides} />
            </div>
        </section>
    );
}