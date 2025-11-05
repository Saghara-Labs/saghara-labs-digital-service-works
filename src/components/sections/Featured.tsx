import FeaturedCard from "@/components/ui/FeaturedCard";

const featuredData = [
  {
    title: "Build powerful brand experiences",
    description:
      "Webflow lets your whole team build web experiences (including interactions and animations) visually, with help from AI — while keeping everything on-brand with design systems and designer-approved building blocks.",
    image: "/saghara-featured.png",
    link: "#",
  },
  {
    title: "Manage content that converts, at scale",
    description:
      "Webflow’s visual, composable CMS lets you create and manage content that drives results — while built-in SEO and AEO tools help you optimize content for both traditional and AI-driven search.",
    image: "/saghara-featured.png",
    link: "#",
  },
  {
    title: "Optimize for conversion with AI",
    description:
      "Webflow’s native analytics — along with AI-powered personalization and localization tools — empower you to discover what works, scale it globally, and drive revenue.",
    image: "/saghara-featured.png",
    link: "#",
  },
];

export default function Featured() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 pt-16 pb-16">
      <div className="mx-auto max-w-screen-xl py-0 text-center lg:py-0">
        <h1 className="inline-block w-[50rem] text-5xl leading-none font-bold tracking-tight">
          The website experience platform for high-performing brands
        </h1>
      </div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredData.map((featured, index) => (
          <FeaturedCard
            key={index}
            title={featured.title}
            description={featured.description}
            image={featured.image}
            link={featured.link}
          />
        ))}
      </div>
    </div>
  );
}
