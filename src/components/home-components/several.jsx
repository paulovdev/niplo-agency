import { IoMdPlay } from "react-icons/io";

const Several = () => {
  return (
    <section className="pb-[100px] mb-[50px] border-b border-border flex items-center justify-center max-tablet:p-0 ">
      <video
        src="/several/s-video-1.mp4"
        width={800}
        height={800}
        className="w-full h-[850px] rounded-[2rem] object-cover max-tablet:h-[550px]"
        loop
        muted
        autoPlay
      />

      <div className="absolute size-fit left-[47%] max-tablet:left-[45%]">
        <IoMdPlay
          color="#fff"
          className="text-[8rem] max-tablet:text-[6rem] "
        />
      </div>
    </section>
  );
};

export default Several;
