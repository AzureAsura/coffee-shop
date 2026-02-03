import { 
    Facebook, 
    Instagram, 
    Twitter, 
    Linkedin, 
    Mail, 
    Phone, 
    MapPin,
    ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    const linkSections = [
        {
            title: "Menu",
            links: [
                { text: "Signature Coffee", path: '#products', icon: null },
                { text: "Main Course", path: '#products', icon: null },
                { text: "Pastries", path: '#products', icon: null },
                { text: "Seasonal Brew", path: '#products', icon: null },
            ]
        },
        {
            title: "Company",
            links: [
                { text: "Home", path: '#home', icon: null },
                { text: "Our Story", path: '#', icon: null },
                { text: "Gallery", path: '#', icon: null },
                { text: "Privacy Policy", path: '#', icon: null },
            ]
        },
        {
            title: "Connect",
            links: [
                { text: "+62 812-3456-789", path: 'tel:+628123456789', icon: Phone },
                { text: "hello@twentyone.com", path: 'mailto:hello@twentyone.com', icon: Mail },
                { text: "Denpasar, Bali", path: '#maps', icon: MapPin }
            ]
        }
    ];

    const socialIcons = [
        { icon: Facebook, link: "https://www.facebook.com" },
        { icon: Instagram, link: "https://www.instagram.com" },
        { icon: Twitter, link: "https://twitter.com" },
        { icon: Linkedin, link: "https://www.linkedin.com" },
    ];

    return (
        <footer className="relative overflow-hidden">

            <div className="max-w-7xl border-t-2">
                <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                    <p>
                        Copyright 2026 © Twenty One Coffee & Eatery.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-green-700 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-green-700 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;