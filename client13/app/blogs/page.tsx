import CreateBlog from "@/components/CreateBlog";
import getPostMetadata from "@/components/getPostMetadata";
import Link from "next/link";

const BACKEND_URL = process.env.BACKEND_URL;


async function page() {
  const blogs = await getPostMetadata();
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
      {blogs ? (
        blogs?.map((blog: any) => {
          return <Blog key={blog._id} blog={blog}></Blog>;
        })
      ) : (
        <></>
      )}
      <CreateBlog/>
    </div>
  );
}
function Blog({ blog }: any) {
  const { id, title , tags ,created , thumbnail } = blog || {};
  return (
    <>
      <div>
        <section className="flex gap-10 items-center justify-between ">
          <div className="left-col pb-4 pt-4 w-8/12">
            {" "}
            <h4 className=" font-bold text-orange-800 text-lg dark:text-blue-400">
              {title}
            </h4>
            <div className="flex gap-4 items-center ">
              <h3 className="lang text-sm ">{tags}</h3>
              <h3 className="create-at text-xs ">{created}</h3>
            </div>
          </div>
          <Link
            className=" text-xs w-16 h-12 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
            href={`/blogs/${id}`}
          >
            {" "}
            View{" "}
          </Link>
        </section>
      </div>
    </>
  );
}
export default page;
