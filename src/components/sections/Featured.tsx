import FeaturedCard from "@/components/ui/FeaturedCard";

const featuredData = [
  {
    title: "Craft meaningful brand experiences",
    description:
      "We help businesses shape strong digital identities through thoughtful websites, visual design, and branding. Everything is crafted with purpose, clarity, and consistency.",
    image: "/saghara-craft.png",
    link: "#",
  },
  {
    title: "Design and content that speaks clearly",
    description:
      "From copywriting to layout and visuals, we create content that feels natural, easy to understand, and aligned with your brand’s character.",
    image: "/saghara-design.png",
    link: "#",
  },
  {
    title: "Built to support real business goals",
    description:
      "Every project is designed to support your growth. Whether it’s building trust, increasing engagement, or turning visitors into customers.",
    image: "/saghara-built.png",
    link: "#",
  },
];

export default function Featured() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-20">
      <div className="mx-auto max-w-screen-xl py-0 text-center lg:py-0">
        <h1 className="inline-block w-[50rem] text-5xl leading-none font-semibold tracking-tight text-gray-700">
          A digital experience studio for growing local brands
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
      <div>
        <p className="w-[43rem] text-3xl leading-snug font-medium tracking-tight text-gray-700">
          A well-crafted website is just the start. What matters is how it
          serves your real business goals.
        </p>
        <a
          href="#"
          className="mt-4 inline-block text-base font-semibold text-gray-700 underline"
        >
          Let’s build something together
        </a>
      </div>
    </div>
  );
}
