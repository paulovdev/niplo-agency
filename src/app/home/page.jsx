import Hero from "../../components/home-components/hero";
/* import Logos from "../../components/home-components/logos"; */
import Works from "../../components/home-components/works";
import MaskBackground from "@/components/home-components/mask-background";
import Blog from "../../components/home-components/blog";
import Partners from "@/components/home-components/partners";
import Services from "@/components/home-components/services";
/* import Paragraph from "@/components/home-components/paragraph"; */
import Several from "@/components/home-components/several";
import InViewAnimation from "@/utils/inview-anim";

const Home = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <div className="px-[2.5rem] max-tablet:p-[1rem]">
        <Hero />
      </div>

      <MaskBackground src="/bg-video1.mp4" title="Unlocking Potential" />
      {/*   <Logos /> */}

      <div className="px-[2.5rem] max-tablet:px-[1rem]">
        <InViewAnimation>
          <Works />
        </InViewAnimation>
        <Several />
        <Services />
        <Partners />
      </div>

      <div className="px-[2.5rem] max-tablet:px-[1rem]">
        <Blog />
      </div>
    </main>
  );
};

export default Home;
