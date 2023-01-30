import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

interface ProjectCardInfo {
  teamSize: string;
  role: string;
  title: string;
  thumbnail: string;
  slug: string;
  gradient: string;
  url: string;
}

export default function ProjectCard({
  teamSize,
  role,
  title,
  url,
  thumbnail,
  gradient,
}: ProjectCardInfo) {
  return (
    <Link
      href={`${url}`}
      className={cn(
        "transform hover:scale-[1.01] transition-all",
        "flex gap-4 mb-8 md:my-12  rounded-xl w-full bg-gradient-to-r p-1",
        gradient
      )}
    >
      <div className="w-full flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="w-full flex flex-col md:flex-row justify-between h-full">
          <div className="w-full flex flex-col gap-2 h-auto justify-between">
            <div className="w-full items-center">
              {" "}
              <Image
                sizes="100vw"
                width="0"
                height="0"
                alt="Project"
                className="w-full h-full "
                src={thumbnail}
              ></Image>
            </div>
            <div className="">
              {" "}
              <h4 className="text-lg md:text-lg font-medium w-full text-gray-900 dark:text-gray-100 tracking-tight">
                {title}
              </h4>
              <h4 className="text-md md:text-lg font-medium w-full text-red-500 dark:text-yellow-300 tracking-tight">
                {role} - {teamSize}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
