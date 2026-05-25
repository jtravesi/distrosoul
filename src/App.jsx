import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import IntroScreen from './components/IntroScreen';
import QuestionScreen from './components/QuestionScreen';
import FinalQuestionScreen from './components/FinalQuestionScreen';
import RevealScreen from './components/RevealScreen';
import AboutScreen from './components/AboutScreen';
import SoundToggle from './components/SoundToggle';

import { questions } from './data/questions';
import { finalQuestion } from './data/finalQuestion';
import { reveals } from './data/reveals';
import { selectQuestions } from './lib/selectQuestions';
import { calculateResult } from './lib/scoring';

const QUESTION_COUNT = 8;

/**
 * distrosoul state machine.
 *
 * Phases:
 *   intro    → welcome dialogue, link to About, click to start
 *   about    → why-this-exists + privacy statement, back to intro
 *   question → 8 random personality questions, one per tick
 *   final    → fixed tie-break question
 *   reveal   → nature text, then distro reveal, then restart
 */
export default function App() {
  const [phase, setPhase] = useState('intro');
  const [shownQuestions, setShownQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answeredOptions, setAnsweredOptions] = useState([]);
  const [resultId, setResultId] = useState(null);

  const startQuiz = () => {
    setShownQuestions(selectQuestions(questions, QUESTION_COUNT));
    setCurrentIndex(0);
    setAnsweredOptions([]);
    setResultId(null);
    setPhase('question');
  };

  const handleQuestionAnswer = (option) => {
    const next = [...answeredOptions, option];
    setAnsweredOptions(next);

    if (currentIndex + 1 < shownQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setPhase('final');
    }
  };

  const handleFinalAnswer = (option) => {
    const id = calculateResult(answeredOptions, option.path);
    setResultId(id);
    setPhase('reveal');
  };

  const restart = () => {
    setPhase('intro');
    setShownQuestions([]);
    setCurrentIndex(0);
    setAnsweredOptions([]);
    setResultId(null);
  };

  const renderScreen = () => {
    if (phase === 'intro') {
      return (
        <IntroScreen
          onStart={startQuiz}
          onAbout={() => setPhase('about')}
        />
      );
    }

    if (phase === 'about') {
      return <AboutScreen onBack={() => setPhase('intro')} />;
    }

    if (phase === 'question') {
      const question = shownQuestions[currentIndex];
      return (
        <QuestionScreen
          question={question}
          index={currentIndex}
          total={shownQuestions.length}
          onAnswer={handleQuestionAnswer}
        />
      );
    }

    if (phase === 'final') {
      return (
        <FinalQuestionScreen
          question={finalQuestion}
          onAnswer={handleFinalAnswer}
        />
      );
    }

    const reveal = resultId ? reveals[resultId] : null;
    if (!reveal) {
      return <IntroScreen onStart={startQuiz} onAbout={() => setPhase('about')} />;
    }
    return <RevealScreen reveal={reveal} onRestart={restart} />;
  };

  // Unique key per screen so AnimatePresence detects swaps — questions
  // include their index so we get a transition between each one.
  const screenKey =
    phase === 'question' ? `question-${currentIndex}` : phase;

  return (
    <>
      <SoundToggle />
      <AnimatePresence mode="wait">
        <motion.div
          key={screenKey}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
