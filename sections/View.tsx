import { Layout, Hammer, Heart, Sparkles, Award, Leaf } from 'lucide-react';
import SliderCard from '@/components/SliderCard';

export default function View() {
    const slides = [
        {
            features: [
                { icon: <Layout size={24} />, title: "Minimalist Elegance" },
                { icon: <Hammer size={24} />, title: "Quality Craftsmanship" },
                { icon: <Heart size={24} />, title: "Versatile Design" },
            ],
            image: "https://images.unsplash.com/photo-1617676367459-e25e7d90c02a?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            header: 'Outdoor',
            imagePosition: "left"
        },
        {
            features: [
                { icon: <Sparkles size={24} />, title: "Modern Aesthetics" },
                { icon: <Award size={24} />, title: "Award Winning" },
                { icon: <Leaf size={24} />, title: "Eco Friendly" },
            ],
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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