import DynamicImage from "@/components/reusable/dynamic-image";
import TextSlide from "@/components/reusable/text-slide";
import worksData from "@/data/worksData";
import Image from "next/image";

const WorkView = async ({ params: paramsPromise }) => {
  const params = await paramsPromise;
  const { workId } = params;

  const works = worksData.find((work) => work.id === String(workId));

  if (!works) return <p>Work not found</p>;

  return (
    <main className="size-full">
      <div className="relative w-screen h-screen">
        <div className="absolute w-screen h-screen top-0 left-0">
          <DynamicImage
            src={works.srcView}
            alt={works.name}
            width={1920}
            height={1080}
            className="size-full object-center object-cover"
          />
          <div className="absolute bottom-6 left-1/2">
            <Image
              src="/mouse-scroll.gif"
              alt="Scroll indicator"
              width={35}
              height={45}
            />
          </div>
        </div>
      </div>

      <section className="w-full my-0 mx-auto px-[2.5rem] py-[4rem] max-tablet:px-[1rem]">
        <div className="w-full pb-[150px] mb-[50px] border-b border-border flex items-start justify-between max-tablet:flex-col max-tablet:pb-[50px]">
          <div className="flex flex-col">
            <span className="mb-[1rem] text-color2 text-[.8rem] font-[500] tracking-[-.2px] max-tablet:text-[.8rem]">
              NIPLO APRESENTS
            </span>
            <TextSlide
              color="text-color !leading-[1.4]"
              phrases={[works.name]}
              rightContentBol={false}
            />
          </div>

          <div className="flex items-start flex-col gap-[1rem] max-tablet:gap-[2rem] max-tablet:mt-[2.5rem]">
            {["description", "category", "client", "year"].map((key) => (
              <div key={key} className="flex items-start flex-col">
                <h2 className="mb-[.5rem] font-chivo text-color font-[500] text-[1rem] uppercase">
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </h2>
                <p className="text-color2 text-[1rem] font-[400] tracking-[-.5px] leading-[1.1]">
                  {works[key]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="image-gallery mt-4">
          <div className="grid grid-cols-2 gap-4">
            {works.images.map((image, index) => (
              <DynamicImage
                key={index}
                src={image}
                alt={`Project image ${index + 1}`}
                width={1200}
                height={1200}
                className="w-full h-[600px] object-cover rounded-[1.5rem]"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkView;
