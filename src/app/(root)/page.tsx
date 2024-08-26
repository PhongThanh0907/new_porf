import Header from "@/components/header";
import About from "./_components/about";
import Overview from "./_components/overview";
import Experience from "./_components/experience";
import Skills from "./_components/skills";
import Projects from "./_components/projects";
import Contact from "./_components/contact";
import AboutMobile from "./_components/about/mobile";
import MobileHeader from "@/components/header/mobile";
import MobileExperience from "./_components/experience/mobile";
import MobileProjects from "./_components/projects/mobile";
import Content from "./_components/content";

export default function Home() {
  return (
    <main className="">
      <Content />
      <Header />
      <MobileHeader />
      <About />
      <AboutMobile />
      <Overview />
      <Experience />
      <MobileExperience />
      <Skills />
      <Projects />
      <MobileProjects />
      <Contact />
    </main>
  );
}
