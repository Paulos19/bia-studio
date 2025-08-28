// app/page.tsx
import { Hero } from "./components/Hero";
import { BeginnerCourse } from "./components/BeginnerCourse";
import { AdvancedCourse } from "./components/AdvancedCourse";
import { AboutMe } from "./components/AboutMe";

export default function Home() {
  return (
    <>
      <Hero />
      <BeginnerCourse />
      <AdvancedCourse />
      <AboutMe />
    </>
  );
}