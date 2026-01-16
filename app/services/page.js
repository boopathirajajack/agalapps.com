import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Process from "@/components/sections/Process";

export const metadata = {
  title: "Our Services - Agal Apps",
  description: "Explore our premium services including Mobile App Development, Web Applications, IT Consulting, and Enterprise Solutions.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
      <TechStack />
      <Process />
    </div>
  );
}
