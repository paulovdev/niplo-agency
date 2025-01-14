import TextSlide from "../reusable/text-slide";

export default function Hero() {
  return (
    <div className="w-full h-[85dvh] my-0 mx-auto py-[2rem] flex flex-col items-start justify-end select-none pointer-events-none">
      <span className="mb-[1rem] text-color2 text-[.8rem] font-[500] tracking-[-.2px] max-tablet:text-[.8rem]">
        PARTNERS 2025
      </span>
      <TextSlide
        color="text-color"
        phrases={["Discover our clients"]}
        rightContentBol={true}
        span="(15 CLIENTS)"
      />
    </div>
  );
}
