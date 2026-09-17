import { useState, useEffect } from 'react';
import IntroSequence from './component/Intro/IntroSequence';
import Navbar from './component/navbar/Navbar';
import Hero from './component/Hero/Hero';
import AboutCoachSection from './component/Sections/AboutCoachSection';
import CommonProblemsSection from './component/Sections/CommonProblemsSection';
import GoalSelectorSection from './component/Sections/GoalSelectorSection';
import InteractivePrograms from './component/Sections/InteractivePrograms';
import RealLifeSituationsSection from './component/Sections/RealLifeSituationsSection';
import ExperienceJourney from './component/Sections/ExperienceJourney';
import SpeakingExerciseSection from './component/Sections/SpeakingExerciseSection';
import DailyChallengeSection from './component/Sections/DailyChallengeSection';
import TransformationSection from './component/Sections/TransformationSection';
import InteractiveTestimonials from './component/Sections/InteractiveTestimonials';
import BookingCtaSection from './component/Sections/BookingCtaSection';
import Footer from './component/Footer/Footer';
import CustomCursor from './component/Cursor/CustomCursor';

// Dedicated Subpages
import AboutCoachPage from './pages/AboutCoachPage';
import TeachingApproachPage from './pages/TeachingApproachPage';
import WhyLearnWithUsPage from './pages/WhyLearnWithUsPage';
import SpokenEnglishPage from './pages/SpokenEnglishPage';
import InterviewPrepPage from './pages/InterviewPrepPage';
import WorkplaceEnglishPage from './pages/WorkplaceEnglishPage';
import OneOnOneMentorshipPage from './pages/OneOnOneMentorshipPage';
import SpeakingPracticePage from './pages/SpeakingPracticePage';
import InterviewQuestionsPage from './pages/InterviewQuestionsPage';
import CommonMistakesPage from './pages/CommonMistakesPage';
import EverydayVocabularyPage from './pages/EverydayVocabularyPage';

import './style.css';

export default function App() {
  const [, setIntroFinished] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(() => {
    return window.location.hash || '#/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentRoute(hash);

      if (hash.startsWith('#/')) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash.startsWith('#') && hash.length > 1) {
        const elementId = hash.replace('#', '');
        setTimeout(() => {
          const el = document.getElementById(elementId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBookSession = () => {
    const isSubpage = currentRoute.startsWith('#/') && currentRoute !== '#/';
    if (isSubpage) {
      window.location.hash = '#contact';
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const renderContent = () => {
    switch (currentRoute) {
      case '#/about/coach':
        return <AboutCoachPage onBookSession={handleBookSession} />;
      case '#/about/teaching-approach':
        return <TeachingApproachPage onBookSession={handleBookSession} />;
      case '#/about/why-us':
        return <WhyLearnWithUsPage onBookSession={handleBookSession} />;

      case '#/courses/spoken-english':
        return <SpokenEnglishPage onBookSession={handleBookSession} />;
      case '#/courses/interview-prep':
        return <InterviewPrepPage onBookSession={handleBookSession} />;
      case '#/courses/workplace-english':
        return <WorkplaceEnglishPage onBookSession={handleBookSession} />;
      case '#/courses/1-on-1-mentorship':
        return <OneOnOneMentorshipPage onBookSession={handleBookSession} />;

      case '#/resources/speaking-practice':
        return <SpeakingPracticePage onBookSession={handleBookSession} />;
      case '#/resources/interview-questions':
        return <InterviewQuestionsPage onBookSession={handleBookSession} />;
      case '#/resources/common-mistakes':
        return <CommonMistakesPage onBookSession={handleBookSession} />;
      case '#/resources/vocabulary':
        return <EverydayVocabularyPage onBookSession={handleBookSession} />;

      default:
        // Main Home Landing Page with 100% original Hero and animation system
        return (
          <main>
            {/* HERO SECTION IS 100% UNTOUCHED & APPROVED */}
            <Hero onBookSession={handleBookSession} />

            {/* 1. Common English Problems (Immediate Empathy & Recognition) */}
            <CommonProblemsSection />

            {/* 2. About & Philosophical Foundation */}
            <AboutCoachSection />

            {/* 3. Choose Your Goal (Interactive Goal Selector & Track Match) */}
            <GoalSelectorSection onBookSession={handleBookSession} />

            {/* 4. Interactive Curricula Tracks */}
            <InteractivePrograms onBookSession={handleBookSession} />

            {/* 5. English In Real Life (Practical Scenarios & Spoken Breakdowns) */}
            <RealLifeSituationsSection />

            {/* 6. Pinned Storytelling Journey (4 Step Progression) */}
            <ExperienceJourney />

            {/* 7. Try a Speaking Exercise (Interactive Prompt with Live Feedback) */}
            <SpeakingExerciseSection />

            {/* 8. Daily English Challenge (5-Day Vocabulary, Phrase & 30s Timer) */}
            <DailyChallengeSection />

            {/* 9. Comparative Matrix & Monumental Metrics & 6 Student Results */}
            <TransformationSection />

            {/* 10. Editorial Spotlight Testimonials */}
            <InteractiveTestimonials />

            {/* 11. Climax Consultation Booking CTA */}
            <BookingCtaSection onBookSession={handleBookSession} />
          </main>
        );
    }
  };

  return (
    <>
      <IntroSequence onComplete={() => setIntroFinished(true)} />
      <CustomCursor />
      <Navbar onBookSession={handleBookSession} />
      {renderContent()}
      <Footer />
    </>
  );
}
