import TextSlide from "../reusable/text-slide";

export default function Hero() {
  return (
    <div className="w-full h-[85dvh] my-0 mx-auto py-[2rem] flex flex-col items-start justify-end select-none pointer-events-none">
      <div className="w-full py-[4rem]  flex items-start justify-between  flex-col ">
        <span className="mb-[1rem] text-color2 text-[.8rem] font-[500] tracking-[-.2px] max-tablet:text-[.8rem]">
          OF 2015 UNTIL 2025
        </span>
        <TextSlide
          color="text-color"
          phrases={["ALL WORKS"]}
          span="(12 ARCHIVES)"
          rightContentBol={true}
        />
      </div>

      <div className="c-p relative w-full h-fit">
        <div className="relative w-full flex items-center justify-between">
          <div className="w-[25%] flex justify-start">
            <span className="font-general text-color text-[.8rem] font-[600] uppercase ">
              year:
            </span>
          </div>

          <div className="w-[25%] flex justify-start">
            <h1 className="font-general text-color text-[.8rem] font-[600] uppercase ">
              NAME:
            </h1>
          </div>

          <div className="w-[50%] flex justify-end">
            <p className="font-general text-color text-[.8rem] font-[600] uppercase ">
              type:
            </p>
          </div>
        </div>

        <div className="pt-[2rem] border-b border-border" />
      </div>
    </div>
  );
}
