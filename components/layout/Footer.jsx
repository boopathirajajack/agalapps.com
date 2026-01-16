import Logo from '@/components/ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <Logo />
          </div>
          <p className="text-zinc-500 ">
            © {new Date().getFullYear()} Agal Apps. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Twitter</a>
          <a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href="#" className="text-zinc-500 hover:text-blue-600 transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
