import Image from "next/image";
import { client } from "@/lib/sanity-server";
import { Work } from "@/lib/types";
import Card from "@/components/Card";
import { DocIcon, CalIcon } from "@/components/Icons";
import Links from "@/components/Links";
import Chips from "../components/Spline";

async function getWork() {
  const query = `*[_type == 'work']| order(position asc) {
  title,
  description,
  image,
  stack,
  tags,
  links
 }`;
  const work: Work[] = await client.fetch(query);
  return work;
}

export default async function Home() {
  const work = await getWork();
  return (
    <div className="flex flex-col">
      <div className="flex flex-col max-w-[42rem] gap-1 mt-4">
        {/* <Image
          src="/avatar.jpg"
          alt="Hamaad Siddiqui"
          width={96}
          height={96}
          className="rounded-full mb-5"
        /> */}
        <Chips />
        <h1 className="font-semibold text-[60px] text-darkPrimary">
          Hamaad Siddiqui
        </h1>
        <p className="text-darkPrimary mt-4">
          Full-Stack Developer building intuitive and efficient applications
          using React / Next.js & Flutter. Passionate about staying current with
          industry developments and continuously expanding my skillset to
          deliver innovative solutions.
        </p>
        <p className="text-darkPrimary mt-4">
          I am always interested in new projects, tech, and opportunities. If
          you would like to connect we can schedule a call, you can also reach
          out via the links below.
        </p>
      </div>
      <div className="flex flex-row mt-5 items-center flex-wrap text-darkPrimary ">
        <Links />
        <div className="flex mb-6">
          <a href="/meeting" target="_blank" rel="noreferrer">
            <button className="border border-darkPrimary text-base px-1 pr-2 rounded flex items-center gap-2">
              <CalIcon /> Book a call
            </button>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-6"
          >
            <button className="border border-darkPrimary text-base px-1 pr-2 rounded flex items-center gap-2">
              <DocIcon /> Résumé
            </button>
          </a>
        </div>
      </div>
      <h2 className="font-semibold text-3xl text-darkPrimary mt-10">
        Past Projects
      </h2>
      <p className="text-darkPrimary mt-2 mb-10">
        Here is a list of few of my past work & clients, if you want to see more
        feel free to contact me.
      </p>
      <div className="flex flex-row justify-between items-center gap-10 flex-wrap max-[978px]:justify-center">
        {work.map((item, i) => (
          <Card
            key={i}
            title={item.title}
            description={item.description}
            image={item.image}
            stack={item.stack}
            tags={item.tags}
            links={item.links}
          />
        ))}
      </div>
    </div>
  );
}
