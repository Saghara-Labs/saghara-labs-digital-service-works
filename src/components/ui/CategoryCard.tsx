interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
}

export default function CategoryCard({
  title,
  image,
  link,
}: CategoryCardProps) {
  return (
    <div className="w-[25.5rem] bg-white">
      <a href={link}>
        <div className="flex aspect-[2.5/1] w-full items-center overflow-hidden rounded-lg border border-slate-300">
          <p className="flex-1 px-10 text-left text-xl font-semibold text-gray-800">
            {title}
          </p>

          <img
            className="h-40 w-40 border-l border-slate-300 object-cover"
            src={image}
            alt={title}
          />
        </div>
      </a>
    </div>
  );
}
