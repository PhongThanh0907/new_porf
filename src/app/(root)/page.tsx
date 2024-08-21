import Header from "@/components/header";
import About from "./_components/about";
import Overview from "./_components/overview";
import Experience from "./_components/experience";
import Skills from "./_components/skills";

export default function Home() {
  return (
    <main className="">
      <Header />
      <About />
      <Overview />
      <Experience />
      <Skills />
    </main>
  );
}
