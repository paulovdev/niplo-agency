import Icons from "@/components/partners-components/icons";
import Hero from "@/components/partners-components/hero";
import { Shape } from "@/utils/shape";
export default function Partners() {
    return (
        <section className="mx-auto my-0 w-full p-[2.5rem] bg-background">
            <Hero />
            <Icons />

            <Shape pos="right-12" />
        </section>
    )
}