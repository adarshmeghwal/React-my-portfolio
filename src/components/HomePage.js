import React from "react";
import Title from "./Title";
import RecommendationSection from "./RecommendationSection";
import SkillsSection from "./SkillsSection";
import ProjectSection from "./ProjectSection";
import BlogSection from "./BlogSection";
import About from "./About";

function HomePage() {
  return (
    <div>
      <Title name="Adarsh" leadText="I am a freelance developer" />
      <RecommendationSection />
      <SkillsSection />
      <ProjectSection />
      <About />
      <BlogSection />
    </div>
  );
}

export default HomePage;
