import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl py-16">
        <div className="sm:flex sm:items-center sm:justify-between">
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
            <span className="self-center font-semibold whitespace-nowrap text-gray-700 hover:text-gray-700">
              Saghara Labs
            </span>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <Link href="#" className="me-4 hover:underline md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="me-4 hover:underline md:me-6">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="me-4 hover:underline md:me-6">
                Insights
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <Link href="https://sagharalabs.com" className="hover:underline">
            Saghara Labs
          </Link>
          . All rights reserved.
        </span>
      </div>
    </footer>
  );
}
