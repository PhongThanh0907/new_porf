import Header from "@/components/header";
import About from "./_components/about";
import Overview from "./_components/overview";
import Experience from "./_components/experience";

export default function Home() {
  return (
    <main className="">
      <Header />
      <About />
      <Overview />
      <Experience />
    </main>
  );
}
