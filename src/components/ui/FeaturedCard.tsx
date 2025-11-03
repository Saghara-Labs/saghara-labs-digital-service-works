import Image from "next/image";
import Link from "next/link";

interface FeaturedCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function FeaturedCard({
  title,
  description,
  image,
  link,
}: FeaturedCardProps) {
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
        <div>
          <div className="mb-1 flex justify-between">
            <Link href={link}>
              <h5 className="text-sm font-semibold text-gray-900">{title}</h5>
            </Link>
          </div>
          <p className="line-clamp-1 text-sm font-normal text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
