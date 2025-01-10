import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
  <main className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 font-Kode overflow-clip" >
     <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}
        />
        <Blog />
        <Footer />
      </div>
    </main>
  );
}
