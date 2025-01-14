import Hero from "@/components/works-components/hero";
import { Shape } from "@/utils/shape";
import Works from "@/components/works-components/works";

const WorksPage = () => {
    return (
        <section className="mx-auto my-0 w-full p-[2.5rem] bg-background">
            <Hero />
            <Works />
            <Shape pos="right-12" />
        </section>
    )
}
export default WorksPage;