import TextSlide from "../reusable/text-slide";

export default function Hero() {
  return (
    <div className="w-full h-[85dvh] my-0 mx-auto py-[2rem] flex flex-col items-start justify-end gap-[1rem]">
      <div className="w-full flex items-center justify-between">
        <TextSlide
          color="text-color"
          phrases={["FROM THE NEWSROOM"]}
          span="(06 ARCHIVES)"
          rightContentBol={true}
        />
      </div>
    </div>
  );
}
