import TextSlide from "../reusable/text-slide";

export default function Hero() {
  return (
    <div className="my-0 mx-auto w-full h-[70dvh] flex flex-col items-start justify-end gap-[1rem]">
      <div className="w-full flex items-end justify-between max-laptop:flex-col max-laptop:items-start">
        <div className="flex flex-col gap-[1rem]">
          <span className="mb-[1rem] text-color5 text-[.8rem] font-[500] tracking-[-.2px] max-tablet:text-[.8rem]">
            ABOUT US
          </span>

          <TextSlide
            color="text-color"
            phrases={["FIND YOUR UNIQUE CREATIVE SOLUTIONS"]}
            rightContentBol={false}
            description={[
              "Why fit in when you were born to stand out? We are Uni Agency. ",
              "A digital creative agency. Crafting UNIque experiences that captivate",
              "and engage your audience. Let's dive into the UNI world together.",
            ]}
            descriptionVisibleBol={true}
          />
        </div>
      </div>
    </div>
  );
}
