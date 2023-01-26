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
        "rounded-xl w-full bg-gradient-to-r p-1",
        gradient
      )}
    >
      <div className=" flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-2">
            <div className="items-center">
              {" "}
              <Image
                sizes="100vw"
                width="0"
                height="0"
                alt="Project"
                className="w-full h-auto "
                src={thumbnail}
              ></Image>
            </div>

            <h4 className="text-lg md:text-lg font-medium w-full text-gray-900 dark:text-gray-100 tracking-tight">
              {title}
            </h4>
            <h4 className="text-md md:text-lg font-medium w-full text-gray-900 dark:text-gray-100 tracking-tight">
              {role} - {teamSize}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
}
