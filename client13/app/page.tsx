import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import SocialBar from "@/components/SocialBar";
import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src }: { src: string }) => {
  return `${src}`;
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Tuan Anh Nguyen
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              <span className="font-semibold">RMIT </span>
              Software Engineering (Honours) student{" "}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              A highly motivated and results-driven Software Engineering student
              from RMIT University with a solid understanding of various
              programming languages.
            </p>
          </div>
          <div className="w-[0px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <div className="flex flex-col gap-3">
              <Image
                alt="Tuan Anh Nguyen"
                height={176}
                width={176}
                src="https://media.licdn.com/dms/image/D5603AQFTuj_Qi4pfAQ/profile-displayphoto-shrink_400_400/0/1674363073070?e=1680134400&v=beta&t=OFQpAPH_-o5ol8V3OAtbkPdJaxixhRrXt5wumLDV8CE"
                sizes="30vw"
                priority
                className="rounded-full filter"
              />
              <SocialBar></SocialBar>
            </div>
          </div>
        </div>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Projects
        </h3>
        <div className="flex gap-6 flex-col md:grid md:grid-flow-col md:grid-rows-2 md:gap-4 ">
          <ProjectCard
            thumbnail="https://user-images.githubusercontent.com/67695658/214550280-6c2b6c64-67ba-4898-a060-a0b9372adc45.png"
            role="Team leader"
            url="https://github.com/tuananh131001/Cardinalis-BE"
            teamSize="4 people"
            title="Cardinalis - Microservices Social Platform "
            slug="style-guides-component-libraries-design-systems"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <ProjectCard
            thumbnail="https://user-images.githubusercontent.com/67695658/180659614-01378f12-ff70-41a0-8c8e-440cb42869fc.png"
            role="Personal"
            url="https://github.com/tuananh131001/UNS"
            teamSize="Individual"
            title="UNS - Image Sharing Website "
            slug="style-guides-component-libraries-design-systems"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
          <ProjectCard
            thumbnail="https://user-images.githubusercontent.com/67695658/169047047-67115a3d-5f6f-46e3-887d-54a0378c5cce.png"
            role="Team Leader"
            url="https://github.com/tuananh131001/EEET2580-Front-End-Dramaholic"
            teamSize="5 people"
            title="Dramaholic - Movie Streaming Website "
            slug="style-guides-component-libraries-design-systems"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
          {/* <ProjectCard
              title="Past, Present, and Future of React State Management"
              slug="react-state-management"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            /> */}
        </div>
        <Link
          href="/blog"
          className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
        >
          <>
            {"Read all posts"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </>
        </Link>
      </div>
    </>
  );
}
