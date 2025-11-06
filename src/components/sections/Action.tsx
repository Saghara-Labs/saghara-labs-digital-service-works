import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Services() {
  return (
    <section className="bg-blue-600">
      <div className="mx-auto max-w-screen-xl text-center">
        <div className="flex flex-col items-center justify-center py-20">
          <div className="mb-12 text-center">
            <h1 className="mb-6 w-[35rem] text-5xl leading-none font-semibold tracking-tight text-white">
              Make creativity your competitive edge
            </h1>
            <p className="mb-8 text-lg font-medium text-white">
              Bring your boldest ideas to life with Webflow.
            </p>
            <div>
              <Button label="Get started" />
            </div>
          </div>
          <div className="w-[50rem]">
            <Image
              width={1200}
              height={720}
              src="/saghara-service.png"
              alt="Services"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
