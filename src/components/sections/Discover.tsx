export default function Discover() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl py-8 text-center lg:py-16">
        <h1 className="mb-6 inline-block w-[35rem] text-4xl leading-none font-semibold tracking-tight text-gray-700 md:text-5xl lg:text-5xl">
          Custom digital services tailored to your brand
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:px-72 lg:text-lg">
          We design and build websites, identities, and content tailored to your
          brand.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <form className="mx-auto flex max-w-sm items-center">
            <label className="sr-only">Search</label>
            <div className="relative w-80">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4">
                <svg
                  className="h-4 w-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="block w-full rounded-full border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Search all categories or templates..."
                required
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
