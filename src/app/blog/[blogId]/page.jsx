import DynamicImage from "@/components/reusable/dynamic-image";
import TextSlide from "@/components/reusable/text-slide";
import blogsData from "@/data/blogsData";

const BlogView = async ({ params: paramsPromise }) => {
  const params = await paramsPromise;
  const { blogId } = params;

  const blog = blogsData.find((blog) => blog.id === String(blogId));

  if (!blog) return <p>Blog not found</p>;

  return (
    <main className="w-screen mx-auto my-0">
      <div className="relative size-full px-[2.5rem] py-[6rem] max-tablet:px-[1rem]">
        <div className="relative max-w-[1000px] mx-auto py-[4rem] flex flex-col justify-center items-center">
          <span className="mb-[1rem] text-color2 text-[.9rem] font-[500] tracking-[-.1px]">
            {blog.category}
          </span>
          <TextSlide
            color="text-center text-color !text-[3rem] font-[500] tracking-[-1px] !leading-[1.2] uppercase"
            phrases={[blog.title]}
            rightContentBol={false}
          />
        </div>

        <DynamicImage
          src={blog.img}
          alt={blog.title}
          width={1200}
          height={800}
          className="w-full h-[800px] object-center object-cover rounded-[1rem] "
        />

        <div className="relative max-w-[1000px] mx-auto py-[4rem] flex flex-col justify-center items-center">
          <div
            className="blog-text "
            dangerouslySetInnerHTML={{ __html: blog.description }}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default BlogView;
