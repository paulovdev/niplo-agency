import { IoMdPlay } from "react-icons/io";

const Several = () => {

    return (
        <section className='pb-[150px] mb-[50px] border-b border-border flex items-center justify-center max-tablet:p-0 '>
            <video
                src="/several/s-video-1.mp4"
                width={1900}
                height={1200}
                className='w-full h-[850px] rounded-[2rem] object-cover max-tablet:h-[550px]'
                loop
                muted
                autoPlay />

            <div className="absolute size-fit">
                <IoMdPlay color="#fff" className="text-[8rem]" />
            </div>


        </section>
    )
}

export default Several