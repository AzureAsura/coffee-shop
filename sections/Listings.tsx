import { products } from '@/constants';
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ListingsButton from '@/components/ListingsButton';

const Listings = () => {
    return (
        <div className=" md:py-16 relative" id='products'>
            <div className="max-w-7xl mx-auto">

                <div className='flex items-center justify-between mb-4'>

                    <div className="flex flex-col">
                        <span className="text-green-600 font-bold text-[10px] md:text-sm tracking-[0.2em] uppercase mb-1 md:mb-2 ml-1">
                            Freshly Brewed
                        </span>
                        <h2 className="text-[32px] md:text-7xl font-black tracking-[-2px] md:tracking-[-3px] text-[#1A2F1A] uppercase leading-[0.9] md:leading-none">
                            Popular <br className='md:hidden'/> Products
                        </h2>
                    </div>

                    <ListingsButton/>
                </div>

                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {products.map((product) => (
                            <CarouselItem
                                key={product.id}
                                className="md:px-3 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex"
                            >
                                <div className="h-full pb-5 ">
                                    <Card className="rounded-3xl border-none shadow-lg overflow-hidden group h-full flex flex-col">
                                        <CardContent className="p-6 flex flex-col h-full">

                                            <div className="relative mb-6 flex justify-center shrink-0">
                                                <div className="relative">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className=" object-cover rounded-2xl"
                                                    />
                                                </div>
                                            </div>

                                            <div className="text-center text-[#2a2a2a] flex flex-col grow">
                                                <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight flex items-center justify-center">
                                                    {product.name}
                                                </h3>

                                                <p className="text-sm leading-relaxed text-[#5a5a5a]">
                                                    {product.description}
                                                </p>
                                            </div>

                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="flex justify-center md:justify-end gap-4 mt-8">
                        <CarouselPrevious className="static translate-y-0 h-12 w-12 bg-black text-white hover:bg-gray-800 hover:text-white cursor-pointer" />
                        <CarouselNext className="static translate-y-0 h-12 w-12 bg-black text-white hover:bg-gray-800 hover:text-white cursor-pointer" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Listings;