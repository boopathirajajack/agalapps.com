import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";

export const metadata = {
  title: "About Us - Agal Apps",
  description: "Learn about Agal Apps, our vision, mission, and the team behind the specialized iOS, Android, and Web solutions.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <Testimonials />
      <FAQ />
    </div>
  );
}
