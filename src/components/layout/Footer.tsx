export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://sagharalabs.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="saghara-icon.png"
              className="h-8"
              alt="Saghara Labs Logo"
            />
            <span className="text-md self-center font-semibold whitespace-nowrap text-slate-800">
              Saghara Labs
            </span>
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                Insights
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a href="https://sagharalabs.com" className="hover:underline">
            Saghara Labs
          </a>
          . All rights reserved.
        </span>
      </div>
    </footer>
  );
}
