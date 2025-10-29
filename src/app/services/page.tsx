import Categories from "@/components/sections/Categories";
import Services from "@/components/sections/Services";
import Templates from "@/components/sections/Templates";

export default function ServicesPage() {
  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16">
        <Categories />
        <Templates />
        <Services />
      </div>
    </section>
  );
}
