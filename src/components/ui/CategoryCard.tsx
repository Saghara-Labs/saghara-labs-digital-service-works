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
    <div className="max-w-[25.5rem] bg-white">
      <a href={link}>
        <div className="aspect-[2.5/1] w-full overflow-hidden rounded-lg border border-gray-200">
          <img className="h-full w-full object-cover" src={image} alt={title} />
        </div>
      </a>
    </div>
  );
}
