import Products from "@/components/sections/Products";

export const metadata = {
  title: "Our Products - Agal Apps",
  description: "Discover our suite of applications including the Agal Tamil Calendar, QR Scanner, Notes, and Daily Quotes.",
};

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <Products />
    </div>
  );
}
