import Image from "next/image";
import BuildCard from "@/components/ui/BuildCard";

const buildData = [
  {
    title: "Build",
    description:
      "Build a new site from the ground up — including its entire design system — modify its structure and design with ease, and generate code to power dynamic web experiences.",
    link: "#",
  },
  {
    title: "Manage",
    description:
      "Manage the content of your site with the ability to generate copy and CMS collection items individually or in bulk to drive traffic and engagement.",
    link: "#",
  },
  {
    title: "Optimize",
    description:
      "Optimize your site for all audiences by auditing and improving SEO and AEO — and continually testing and improving your site based on CRO best practices.",
    link: "#",
  },
];

export default function Build() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 pt-20 pb-40">
      <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 py-0 lg:flex-row">
        <h1 className="w-full text-left text-5xl leading-none font-bold tracking-tight text-slate-800 lg:w-1/2">
          Go from idea to impact faster with AI
        </h1>
        <p className="w-full text-left text-lg font-medium text-gray-600 lg:w-1/2">
          Create more space for creativity, collaboration, and higher-impact
          work by streamlining workflows, bringing dynamic web experiences to
          life, and optimizing web performance for humans and machines.
        </p>
      </div>
      <div className="max-w-screen-xl">
        <Image
          width={1920}
          height={1080}
          className="h-full rounded-2xl object-cover"
          src="/saghara-service.png"
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
