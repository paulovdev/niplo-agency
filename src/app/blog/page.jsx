import Blogs from "@/components/blog-components/blogs";
import Hero from "@/components/blog-components/hero";

export default function Blog() {
  return (
    <section className="w-full mx-auto my-0 p-[2.5rem]">
      <Hero />
      <Blogs />
    </section>
  );
}
