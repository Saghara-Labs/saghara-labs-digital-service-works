interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function Card({ title, description, image, link }: CardProps) {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white">
      <a href={link}>
        <img className="rounded-t-lg" src={image} alt={title} />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <a
          href={link}
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800"
        >
          Read more
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
