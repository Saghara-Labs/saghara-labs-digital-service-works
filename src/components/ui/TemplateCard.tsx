interface TemplateCardProps {
  title: string;
  description: string;
  image: string;
  icon: string;
  price: string;
  link: string;
}

export default function TemplateCard({
  title,
  description,
  image,
  icon,
  price,
  link,
}: TemplateCardProps) {
  return (
    <div className="max-w-sm bg-white">
      <a href={link}>
        <div className="aspect-[3/4] w-full overflow-hidden rounded-lg border border-gray-200">
          <img className="h-full w-full object-cover" src={image} alt={title} />
        </div>
      </a>
      <div className="mt-4 flex gap-3">
        <img className="h-8 w-8 rounded-full" src={icon} alt={title} />
        <div>
          <div className="mb-1 flex justify-between">
            <a href={link}>
              <h5 className="text-sm font-semibold text-gray-900">{title}</h5>
            </a>
            <p className="text-sm font-semibold text-gray-900">{price}</p>
          </div>
          <p className="mb-4 line-clamp-1 text-sm font-normal text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
