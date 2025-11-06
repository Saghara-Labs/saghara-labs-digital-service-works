import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] bg-cover bg-top bg-no-repeat after:absolute after:right-0 after:bottom-0 after:left-0 after:h-5 after:bg-gradient-to-b after:from-transparent after:to-white after:content-['']">
      <div className="mx-auto max-w-screen-xl py-8 text-center lg:py-40">
        <div>
          <Link
            href="#"
            className="mb-5 inline-flex items-center justify-between rounded-full bg-blue-100 px-1 py-1 pe-4 text-sm text-blue-700 hover:bg-blue-200"
          >
            <span className="me-3 rounded-full bg-blue-600 px-4 py-1.5 text-xs text-white">
              Live
            </span>{" "}
            <span className="text-sm font-medium">
              Let’s craft something magical for your business
            </span>
            <svg
              className="ms-2 h-2.5 w-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
        </div>
        <h1 className="mb-4 inline-block bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
          Digital Service Works
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:px-72 lg:text-lg">
          We craft websites, design, copywriting, branding, and visual assets,
          delivering templates or custom solutions that make your online
          presence stand out.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Button label="Get started" />
        </div>
      </div>
    </section>
  );
}
