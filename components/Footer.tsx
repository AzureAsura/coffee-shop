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
    // Menu disesuaikan untuk Coffee Shop agar client makin sreg
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

            <div className="max-w-7xl">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12 py-16 border-b border-green-100 text-stone-500 relative z-10">
                    
                    <div className="space-y-6">
                        <Link href="/" className="text-4xl font-black text-[#1A2F1A] uppercase tracking-tighter transition-opacity hover:opacity-80">
                            Twenty <span className="text-green-600">One</span>
                        </Link>
                        
                        <p className="max-w-[410px] text-sm leading-relaxed text-stone-500">
                            Nikmati perpaduan sempurna antara kopi premium dan suasana asri. Kami adalah tempat pelarian sejenak dari hiruk pikuk kota.
                        </p>

                        <div className="flex items-center gap-4">
                            {socialIcons.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <Link 
                                        href={item.link} 
                                        key={i} 
                                        className="flex items-center justify-center w-11 h-11 bg-white border border-green-100 text-[#2D4F2D] hover:bg-[#2D4F2D] hover:text-white hover:shadow-lg hover:shadow-green-900/10 transition-all duration-300 rounded-full"
                                    >
                                        <Icon size={18} />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-between w-full md:w-[55%] gap-8 text-sm">
                        {linkSections.map((section, index) => (
                            <div key={index} className="min-w-[140px]">
                                <h3 className="font-bold text-[#1A2F1A] uppercase tracking-wider mb-6 text-[11px]">
                                    {section.title}
                                </h3>
                                <ul className="space-y-4">
                                    {section.links.map((link, i) => {
                                        const LinkIcon = link.icon;
                                        return (
                                            <li key={i} className="flex items-center gap-3 group">
                                                {LinkIcon && (
                                                    <LinkIcon size={14} className="text-green-600" />
                                                )}
                                                <Link 
                                                    href={link.path} 
                                                    className="text-stone-500 hover:text-green-800 hover:translate-x-1 transition-all duration-300 font-medium"
                                                >
                                                    {link.text}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

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