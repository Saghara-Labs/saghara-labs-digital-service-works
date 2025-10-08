import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Navbar() {
  return (
    <nav className="start-0 top-0 z-20 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between py-2">
        <Link
          href="https://sagharalabs.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            width={100}
            height={100}
            src="/saghara-icon.png"
            className="h-8 w-8"
            alt="Saghara Labs Logo"
          />
          <span className="self-center font-semibold whitespace-nowrap text-slate-800 hover:text-slate-900">
            Saghara Labs
          </span>
        </Link>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <Button label="Contact" />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-sm font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
            <li>
              <Link
                href="#"
                className="block rounded-sm bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-slate-800"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded-sm px-3 py-2 text-slate-800 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-slate-900"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded-sm px-3 py-2 text-slate-800 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-slate-900"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block rounded-sm px-3 py-2 text-slate-800 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-slate-900"
              >
                Insights
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
