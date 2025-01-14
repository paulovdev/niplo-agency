import Blogs from "@/components/blog-components/blogs";
import Hero from "@/components/blog-components/hero";
import { Shape } from "@/utils/shape";

export default function Blog() {
    return (
        <section className="w-full mx-auto my-0 p-[2.5rem] bg-background4">
            <Hero />
            <Blogs />
            <Shape pos="right-12 bg-[#222222]" />
        </section>
    )
}