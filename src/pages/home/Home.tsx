import React from 'react';
import HeroSection from '../../components/heroSection/HeroSection';
import SkillSection from '../../components/skillSection/SkillSection';
import Experience from '../../components/experience/Experience';
import Projects from '../../components/projects/Projects';
import Calendar from '../../components/calendar/Calendar';
import InterviewSection from '../../components/interviewSection/InterviewSection';
import ContactMe from '../../components/contactMe/ContactMe';
import QuoteSection from '../../components/quoteSection/QuoteSection';

export const Home: React.FC = () => {
  return (
    <div className="home-page animate-fade-in">
      <HeroSection />
      <SkillSection />
      <Experience />
      <Projects showAllLink={true} />
      <Calendar />
      <InterviewSection />
      <ContactMe />
      <QuoteSection />
    </div>
  );
};

export default Home;
