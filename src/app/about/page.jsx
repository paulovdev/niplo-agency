import Video from "@/components/about-components/video";
import Hero from "../../components/about-components/hero";
import Paragraph from "@/components/about-components/paragraph";
import Awards from "@/components/about-components/awards";
import Stats from "@/components/about-components/stats";
/* import InViewAnimation from "@/utils/inview-anim";
 */
const About = () => {
  return (
    <section className="mx-auto my-0 size-full">
      <div className="px-[2.5rem] max-laptop:p-[1rem]">
        <Hero />
      </div>

      <div className="p-[2.5rem] max-laptop:p-[1rem]">
        <Video />
        <Paragraph />
        <Stats />
        <Awards />
      </div>
    </section>
  );
};

export default About;
