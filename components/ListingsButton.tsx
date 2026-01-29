import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight, Coffee, Utensils, UtensilsCrossed, X } from "lucide-react"
import { menuImages } from "@/constants"

const ListingsButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="
                    group relative flex items-center gap-3
                    bg-green-600 text-white 
                    pl-6 pr-2 py-2 md:pl-8 md:pr-3 md:py-3
                    rounded-full transition-all duration-300
                    border border-white/5 hover:border-green-500/40
                    shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)]
                    active:scale-95 shrink-0 cursor-pointer
                    ">

                    <span className="font-bold uppercase text-md text-green-50/90">
                        Menu
                    </span>

                    <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full group-hover:rotate-[12deg] group-hover:scale-105 transition-all duration-500">
                        <Coffee
                            size={16}
                            className="text-white md:size-[20px] transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>


                    <div className="absolute inset-0 rounded-full bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[600px] w-[95vw] rounded-[2.5rem] border-none bg-[#FBFCFB] p-0 overflow-hidden [&>button]:hidden">
                <div className="p-6 md:p-8">
                    <DialogHeader>

                        <DialogTitle className="sr-only">Our Menu Selection</DialogTitle>


                        <div className="flex flex-row items-center justify-between mb-6 shrink-0 w-full">
                            <div className="flex items-center gap-2 text-green-600">
                                <Utensils size={18} />
                                <span className="text-[12px] font-bold uppercase tracking-[0.2em]">Our Selection</span>
                            </div>
                            <DialogClose className="cursor-pointer">
                                <X size={18} />
                            </DialogClose>
                        </div>
                    </DialogHeader>


                    <div className="no-scrollbar -mx-2 max-h-[70vh] overflow-y-auto px-2 space-y-4">
                        {menuImages.map((src, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-[1.5rem] shadow-sm bg-white border border-green-50"
                            >
                                <img
                                    src={src}
                                    alt={`Menu Page ${index + 1}`}
                                    className="w-full h-auto object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ))}


                        <div className="py-4 text-center text-[10px] text-gray-400 uppercase tracking-widest">
                            End of Menu
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ListingsButton