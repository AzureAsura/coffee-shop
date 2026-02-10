import { products } from '@/constants';
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import ListingsButton from '@/components/ListingsButton';

const Listings = () => {
    return (
        <div className=" md:py-16 relative" id='products'>
            <div className="max-w-7xl mx-auto">

                <div className='flex items-center justify-between mb-4'>

                    <div className="flex flex-col">
                        <span className="text-green-600 font-bold text-[10px] md:text-sm tracking-[0.2em] uppercase mb-1 md:mb-2 ml-1">
                            Best Selling
                        </span>
                        <h2 className="text-[32px] md:text-7xl font-black tracking-[-2px] md:tracking-[-3px] text-[#1A2F1A] uppercase leading-[0.9] md:leading-none">
                            Makan & <br className='md:hidden' />Minum
                        </h2>
                    </div>

                    <ListingsButton />
                </div>

                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {products.map((product) => (
                            <CarouselItem
                                key={product.id}
                                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                            >
                                <div className="h-full py-4">
                                    <div className="group h-full bg-white rounded-2xl transition-all duration-300 shadow-md overflow-hidden border border-gray-200">

                                        <div className="aspect-square w-full overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="h-1.5 w-1.5 rounded-full bg-green-600" />
                                                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                                                    {product.kategori}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-bold text-zinc-800 mb-2">
                                                {product.name}
                                            </h3>

                                            <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                </Carousel>
            </div>
        </div>
    );
};

export default Listings;