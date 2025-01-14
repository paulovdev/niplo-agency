import Button from "../reusable/button";
import TextSlide from "../reusable/text-slide";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export default function Hero() {

    return (
        <div className="my-0 mx-auto w-full h-[85dvh] py-[2rem] flex flex-col items-start justify-end gap-[1rem]">
            <span className="mb-[1rem] text-color5 text-[.8rem] font-[500] tracking-[-.2px] max-tablet:text-[.8rem]">
                WE PLACE GREAT EMPHASIS ON
            </span>
            <TextSlide color="text-color4" phrases={["Providing designers, artists, and brands with", "design that elevates their visual communication."]} />
            <Button title="More about us" rightIcon={<MdOutlineKeyboardArrowDown />} containerClass='bg-background2 pr-5' />
        </div>
    );
}
