import Image from "next/image";
import First from "./components/First";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchivementsSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <Navbar />
      <div className="container mt-20 mx-auto py-4 px-12">
        <First />
        <AboutSection />
        <ProjectSection />
        <AchievementsSection/>
        <EmailSection />
      </div>
        <Footer/>

    </main>
  );
}
