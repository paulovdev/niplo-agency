import Hero from "@/components/works-components/hero";
import Works from "@/components/works-components/works";

const WorksPage = () => {
    return (
        <section className="mx-auto my-0 w-full p-[2.5rem] bg-background max-tablet:p-[1rem]">
            <Hero />
            <Works />
        
        </section>
    )
}
export default WorksPage;