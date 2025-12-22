import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Services() {
  return (
    <section className="bg-blue-600">
      <div className="mx-auto max-w-screen-xl text-left">
        <div className="flex flex-row">
          <div className="w-1/2 py-8 text-left lg:py-16">
            <h1 className="mb-4 w-[35rem] text-4xl leading-tight font-bold tracking-tight text-white">
              Launch your website with Saghara Labs
            </h1>
            <p className="text-md mb-8 w-[30rem] font-normal text-white">
              Discover how Saghara Labs can help you launch your website using
              crafted templates or custom designs. Each option is built with
              care to fit your brand, goals, and audience.
            </p>
            <div>
              <Button label="Get started" />
            </div>
          </div>
          <div className="relative w-full md:w-1/2">
            <Image
              width={1200}
              height={720}
              src="/saghara-service.png"
              alt="Services"
              className="absolute h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
