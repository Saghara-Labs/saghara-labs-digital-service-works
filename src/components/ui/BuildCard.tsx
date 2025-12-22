import Link from "next/link";

interface BuildCardProps {
  title: string;
  description: string;
  link: string;
}

export default function BuildCard({
  title,
  description,
  link,
}: BuildCardProps) {
  return (
    <div className="w-[25.5rem]">
      <Link href={link}>
        <div className="w-full">
          <h5 className="line-clamp-2 text-2xl font-bold text-gray-700">
            {title}
          </h5>
          <p className="mt-4 text-sm font-medium text-gray-500">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}
