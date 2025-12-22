import Image from "next/image";
import BuildCard from "@/components/ui/BuildCard";

const buildData = [
  {
    title: "Build",
    description:
      "We create websites from the ground up with a structure, design, and a system that grows with your brand. Every element is built to feel cohesive and easy to evolve over time.",
    link: "#",
  },
  {
    title: "Manage",
    description:
      "We help you organize and present your content in a clear way. From copy to structure, everything is designed to support communication, engagement, and long-term consistency.",
    link: "#",
  },
  {
    title: "Optimize",
    description:
      "We refine and improve your website to ensure it performs well for real users. Through clarity, usability, and continuous improvements, we help your site stay relevant and effective.",
    link: "#",
  },
];

export default function Build() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 pt-20 pb-40">
      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 py-0 lg:flex-row">
        <h1 className="w-full text-left text-5xl leading-none font-bold tracking-tight text-slate-800 lg:w-1/2">
          From idea to impact through thoughtful craft
        </h1>
        <p className="w-full text-left text-lg font-medium text-gray-600 lg:w-1/2">
          We help brands turn ideas into real outcomes by combining clear
          strategy, purposeful design, and well-crafted digital experiences.
          Every step is built to support meaningful work and real business
          goals.
        </p>
      </div>
      <div className="max-w-screen-xl">
        <Image
          width={1920}
          height={1080}
          className="h-full rounded-2xl object-cover"
          src="/saghara-build.png"
          alt="Saghara Build"
        />
      </div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {buildData.map((build, index) => (
          <BuildCard
            key={index}
            title={build.title}
            description={build.description}
            link={build.link}
          />
        ))}
      </div>
    </div>
  );
}
