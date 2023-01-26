import { create } from "domain";
import Link from "next/link";
import React from "react";
interface RepoProp {
  id: string;
  name: string;
  description: string;
  created_at: string;
  stargazers_count: number;
  language: string;
  html_url: string;
}

async function getRepos() {
  const res = await fetch(
    "https://api.github.com/users/tuananh131001/repos?per_page=10&?sort=created&direction=desc",
    {
      headers: {
        Authorization: `Token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const data = await res.json();
  return data as [RepoProp];
}

async function page() {
  const repos: [RepoProp] = await getRepos();
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
      <div className="flex flex-col-reverse sm:flex-row items-start ">
        <div className="flex flex-col justify-start w-full divide-y divide-slate-400/25 gap-2 ">
          {" "}
          {repos?.map((repo: RepoProp) => {
            return <Repo key={repo.id} repo={repo}></Repo>;
          })}{" "}
        </div>
      </div>
    </div>
  );
}
function Repo({ repo }: { repo: RepoProp }) {
  const { name, description, created_at ,language,html_url } = repo || {};
  return (
    <>
      <section className="flex gap-10 items-center justify-between ">
        <div className="left-col pb-4 pt-4 w-8/12">
          {" "}
          <h4 className=" font-bold text-orange-800 text-lg dark:text-blue-400">{name}</h4>
          <p className=" text-sm ">{description}</p>
          <div className="flex gap-4 items-center ">
            <h3 className="lang text-sm ">{language}</h3>
            <h3 className="create-at text-xs ">{created_at}</h3>
          </div>
        </div>
        <Link className=" text-xs w-16 h-12 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all" href={html_url}> View </Link>
      </section>
    </>
  );
}

export default page;
