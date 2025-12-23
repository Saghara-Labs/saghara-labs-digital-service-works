import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Action() {
  return (
    <section className="bg-blue-600">
      <div className="mx-auto max-w-screen-xl text-center">
        <div className="flex flex-col items-center justify-center py-20">
          <div className="mb-12 text-center">
            <h1 className="mb-6 w-[35rem] text-5xl leading-none font-semibold tracking-tight text-white">
              Stand out through thoughtful digital craft
            </h1>
            <p className="mb-8 text-lg font-medium text-white">
              We help bring ideas to life with design and experiences built for
              real impact.
            </p>
            <div>
              <Button label="Get started" />
            </div>
          </div>
          <div className="w-[50rem]">
            <Image
              width={1800}
              height={1080}
              src="/saghara-standout.png"
              alt="Services"
              className="h-full w-full rounded-xl border border-white/20 object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
