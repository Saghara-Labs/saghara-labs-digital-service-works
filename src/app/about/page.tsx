import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl py-8 text-center lg:py-16">
        <div>
          <p className="mb-8 text-lg font-semibold text-gray-500">
            About Saghara Labs
          </p>
          <h1 className="mb-6 inline-block w-[50rem] text-4xl leading-none font-bold tracking-tight text-gray-700 md:text-5xl lg:text-6xl">
            A digital studio built around craft and clarity.
          </h1>
        </div>

        <div className="mt-16 flex items-center justify-center">
          <Image
            width={1280}
            height={768}
            src="/saghara-build.png"
            className="rounded-2xl"
            alt="Saghara Labs Service"
          />
        </div>

        <div className="mt-24 flex gap-10 text-left">
          <div className="flex-1">
            <h1 className="mb-4 inline-block text-4xl leading-none font-bold tracking-tight text-gray-700">
              Our team
            </h1>
            <p className="text-lg font-semibold text-gray-500">
              A small team that cares about the details
            </p>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex gap-5">
              <Image
                width={100}
                height={100}
                src="/saghara-icon.png"
                className="h-12 w-12"
                alt="Saghara Labs Logo"
              />
              <div>
                <h1 className="mb-2 text-2xl font-semibold text-gray-700">
                  Affrian Rachmansyah
                </h1>
                <p className="text-lg font-semibold text-gray-500">
                  Software Engineer
                </p>
              </div>
            </div>
            <hr className="my-8 border-gray-200" />
            <div className="flex gap-5">
              <Image
                width={100}
                height={100}
                src="/saghara-icon.png"
                className="h-12 w-12"
                alt="Saghara Labs Logo"
              />
              <div>
                <h1 className="mb-2 text-2xl font-semibold text-gray-700">
                  Fadhilah Rahman
                </h1>
                <p className="text-lg font-semibold text-gray-500">
                  UI/UX Designer
                </p>
              </div>
            </div>
            <hr className="my-8 border-gray-200" />
            <div className="flex gap-5">
              <Image
                width={100}
                height={100}
                src="/saghara-icon.png"
                className="h-12 w-12"
                alt="Saghara Labs Logo"
              />
              <div>
                <h1 className="mb-2 text-2xl font-semibold text-gray-700">
                  Luqman Herifa
                </h1>
                <p className="text-lg font-semibold text-gray-500">
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-24 border-gray-200" />

        <div className="flex gap-10 text-left">
          <div className="flex-1">
            <h1 className="mb-4 inline-block text-4xl leading-none font-bold tracking-tight text-gray-700">
              Reviews
            </h1>
            <p className="text-lg font-semibold text-gray-500">
              Words from people we’ve worked with
            </p>
          </div>
          <div className="flex flex-1 flex-col">
            <div>
              <h1 className="mb-5 text-3xl font-semibold text-gray-700">
                Sumber Brian Abadi
              </h1>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 text-gray-700"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                  <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 text-gray-700"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                  <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 text-gray-700"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                  <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 text-gray-700"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                  <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 text-gray-700"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                  <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                </svg>
              </div>
              <p className="mt-3 text-lg font-semibold text-gray-500">
                as of 2025
              </p>
            </div>
            <hr className="my-8 border-gray-200" />
            <div>
              <h1 className="mb-5 text-3xl font-semibold text-gray-700">
                Atma Karya Teknik
              </h1>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 text-gray-700"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                  <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 text-gray-700"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                  <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 text-gray-700"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                  <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 text-gray-700"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                  <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 text-gray-700"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                >
                  <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                </svg>
              </div>
              <p className="mt-3 text-lg font-semibold text-gray-500">
                as of 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
