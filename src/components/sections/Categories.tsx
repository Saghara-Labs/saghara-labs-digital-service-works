import CategoryCard from "@/components/ui/CategoryCard";

const categoriesData = [
  {
    title: "Saghara Labs",
    image: "/saghara-card.png",
    link: "#",
  },
  {
    title: "Saghara Labs",
    image: "/saghara-card.png",
    link: "#",
  },
  {
    title: "Saghara Labs",
    image: "/saghara-card.png",
    link: "#",
  },
  {
    title: "Saghara Labs",
    image: "/saghara-card.png",
    link: "#",
  },
  {
    title: "Saghara Labs",
    image: "/saghara-card.png",
    link: "#",
  },
  {
    title: "Saghara Labs",
    image: "/saghara-card.png",
    link: "#",
  },
];

export default function Categories() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-12">
      <div className="flex w-full max-w-screen-xl justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-slate-800">
            Our website categories
          </h1>
          <p className="text-lg text-slate-500">
            Browse handcrafted templates by category
          </p>
        </div>
        <a
          href="#"
          className="flex items-end font-semibold text-slate-800 hover:underline"
        >
          Explore all categories
        </a>
      </div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categoriesData.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            image={category.image}
            link={category.link}
          />
        ))}
      </div>
    </div>
  );
}
