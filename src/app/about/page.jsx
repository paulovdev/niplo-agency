import Hero from '../../components/about-components/hero';
import Partners from '../../components/home-components/partners';
import Services from '../../components/home-components/services';

import { Shape } from "@/utils/shape";
const About = () => {
    return (
        <section className='mx-auto my-0 size-full  bg-background4'>

            <div className="p-[2.5rem]">
                <Hero />
            </div>

            <MaskBackground src="/about/bg-3.jpg" title="A good agency" />



            <div className="p-[2.5rem]">
                <Partners />
                <Services />
            </div>
            <Shape pos="right-12 bg-[#222222]" />
        </section>
    )
}

export default About;