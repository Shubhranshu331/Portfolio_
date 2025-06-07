import Image from "next/image";
import LoadingLogo from "./components/LoadingLogo";
import First from "./components/First";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsetSection from "./components/SkillsetSection";
import InternshipsSection from "./components/InternshipsSection";

import EmailSection from "./components/EmailSection";
// import AchievementsSection from "./components/AchievementsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f6f0e6] text-[#222222] font-lato">
      <Navbar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <LoadingLogo/>
          <First />
          <AboutSection />
          <SkillsetSection/>
          <InternshipsSection/>
          
          {/* <AchievementsSection /> */}
          <EmailSection />
      </div>
      <Footer />
    </main>
  );
}