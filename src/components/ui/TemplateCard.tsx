import Image from "next/image";
import Link from "next/link";

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
      <Link href={link}>
        <div className="aspect-[3/4] w-full overflow-hidden rounded-lg border border-slate-300">
          <Image
            width={600}
            height={800}
            className="h-full w-full object-cover"
            src={image}
            alt={title}
          />
        </div>
      </Link>
      <div className="mt-4 flex gap-3">
        <Image
          width={100}
          height={100}
          className="h-8 w-8 rounded-full"
          src={icon}
          alt={title}
        />
        <div>
          <div className="mb-1 flex justify-between">
            <Link href={link}>
              <h5 className="text-sm font-semibold text-gray-900">{title}</h5>
            </Link>
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
