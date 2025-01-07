import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <main className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 font-Kode overflow-clip" >
     <div className="max-w-7xl w-full">
        <Blog />
        <Footer />
      </div>
    </main>
  );
}
