import Card from "@/components/ui/Card";

const cardData = [
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

export default function Cards() {
  return (
    <div className="flex min-h-screen items-center justify-center py-12">
      <div className="grid max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            icon={card.icon}
            price={card.price}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}
