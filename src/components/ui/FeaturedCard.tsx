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
    <div className="w-[25.5rem] bg-white">
      <Link href={link}>
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-slate-300">
          <Image
            width={600}
            height={800}
            className="h-full object-cover"
            src={image}
            alt={title}
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/40 to-transparent px-8 py-8">
            <h5 className="line-clamp-2 w-52 text-xl font-semibold text-white">
              {title}
            </h5>
            <p className="mt-4 w-72 text-sm font-medium text-gray-200">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
