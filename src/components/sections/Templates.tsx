import TemplateCard from "@/components/ui/TemplateCard";

const templatesData = [
  {
    title: "Saghara Labs",
    description:
      "We craft websites, design, copywriting, branding, and visual assets, delivering templates or custom solutions that make your online presence stand out.",
    image: "/saghara-card.png",
    icon: "/saghara-icon.png",
    price: "$299",
    link: "#",
  },
  {
    title: "Saghara Labs",
    description:
      "We craft websites, design, copywriting, branding, and visual assets, delivering templates or custom solutions that make your online presence stand out.",
    image: "/saghara-card.png",
    icon: "/saghara-icon.png",
    price: "$299",
    link: "#",
  },
  {
    title: "Saghara Labs",
    description:
      "We craft websites, design, copywriting, branding, and visual assets, delivering templates or custom solutions that make your online presence stand out.",
    image: "/saghara-card.png",
    icon: "/saghara-icon.png",
    price: "$299",
    link: "#",
  },
  {
    title: "Saghara Labs",
    description:
      "We craft websites, design, copywriting, branding, and visual assets, delivering templates or custom solutions that make your online presence stand out.",
    image: "/saghara-card.png",
    icon: "/saghara-icon.png",
    price: "$299",
    link: "#",
  },
  {
    title: "Saghara Labs",
    description:
      "We craft websites, design, copywriting, branding, and visual assets, delivering templates or custom solutions that make your online presence stand out.",
    image: "/saghara-card.png",
    icon: "/saghara-icon.png",
    price: "$299",
    link: "#",
  },
  {
    title: "Saghara Labs",
    description:
      "We craft websites, design, copywriting, branding, and visual assets, delivering templates or custom solutions that make your online presence stand out.",
    image: "/saghara-card.png",
    icon: "/saghara-icon.png",
    price: "$299",
    link: "#",
  },
  {
    title: "Saghara Labs",
    description:
      "We craft websites, design, copywriting, branding, and visual assets, delivering templates or custom solutions that make your online presence stand out.",
    image: "/saghara-card.png",
    icon: "/saghara-icon.png",
    price: "$299",
    link: "#",
  },
  {
    title: "Saghara Labs",
    description:
      "We craft websites, design, copywriting, branding, and visual assets, delivering templates or custom solutions that make your online presence stand out.",
    image: "/saghara-card.png",
    icon: "/saghara-icon.png",
    price: "$299",
    link: "#",
  },
];

export default function Templates() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 pb-16">
      <div className="flex w-full max-w-screen-xl justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-slate-800">
            Our best website templates
          </h1>
          <p className="text-lg text-slate-500">
            Handcrafted templates built by our team
          </p>
        </div>
        <a
          href="#"
          className="flex items-end font-semibold text-slate-800 hover:underline"
        >
          Explore all templates
        </a>
      </div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {templatesData.map((template, index) => (
          <TemplateCard
            key={index}
            title={template.title}
            description={template.description}
            image={template.image}
            icon={template.icon}
            price={template.price}
            link={template.link}
          />
        ))}
      </div>
    </div>
  );
}
