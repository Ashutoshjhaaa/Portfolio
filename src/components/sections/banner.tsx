import Image from "next/image";
import { ABOUT_ME } from "@/app/constants/data";

// OPTION 1: The Premium/Aesthetic Pair
// const ACTIVE_QUOTE = {
//   default: "Society rewards people for building things that work.",
//   hover: "But time rewards people for building things that inspire.",
// };

// OPTION 2: The Hardcore Builder Pair
// const ACTIVE_QUOTE = {
//   default: "The world is full of people dreaming about the future.",
//   hover: "But engineers are the ones actually building it.",
// };

// OPTION 3: The Original Contrast Pair
const ACTIVE_QUOTE = {
  default: "The best way to predict the future is to engineer it.",
  hover: "Everything you can imagine is real if you dare to believe.",
};

const Banner = () => {
  return (
    <section className="w-full liquid-glass rounded-2xl overflow-hidden">
      <div className="w-full h-48 md:h-60 overflow-hidden relative group">
        <Image
          src={ABOUT_ME.bannerImage}
          alt="Banner"
          fill
          priority
          className="w-full h-full object-cover transition-all duration-500 dark:brightness-[0.6] dark:contrast-[1.1] dark:saturate-[0.9]"
        />



        {/* Cinematic Edge Mask */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20" /> */}

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center cursor-pointer select-none">
          <p className="w-full text-white text-lg md:text-2xl font-serif italic text-center px-6 drop-shadow-lg transition-all duration-300 absolute translate-y-0 opacity-100 group-hover:-translate-y-4 group-hover:opacity-0">
            "{ACTIVE_QUOTE.default}"
          </p>
          <p className="w-full text-white text-lg md:text-2xl font-serif italic text-center px-6 drop-shadow-lg transition-all duration-300 absolute translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            "{ACTIVE_QUOTE.hover}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
