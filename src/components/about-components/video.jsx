const Video = () => {
  return (
    <div className="relative w-full h-screen flex items-center gap-[1.5rem] max-tablet:h-fit">
      <video
        className="relative size-full rounded-[1rem] object-cover brightness-[85%] select-none max-tablet:h-[400px]"
        src="/about/about-video.mp4"
        width={1920}
        height={1080}
        alt=""
        autoPlay
        loop
      />
    </div>
  );
};
export default Video;
