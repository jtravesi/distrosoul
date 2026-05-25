import { useState } from 'react';

import IntroScreen from './components/IntroScreen';
import QuestionScreen from './components/QuestionScreen';
import FinalQuestionScreen from './components/FinalQuestionScreen';
import RevealScreen from './components/RevealScreen';

import { questions } from './data/questions';
import { finalQuestion } from './data/finalQuestion';
import { reveals } from './data/reveals';
import { selectQuestions } from './lib/selectQuestions';
import { calculateResult } from './lib/scoring';

const QUESTION_COUNT = 8;

/**
 * findyourdistro — Phase 3 state machine.
 *
 * Phases:
 *   intro    → welcome dialogue, click to start
 *   question → 8 random personality questions, one per phase tick
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

  if (phase === 'intro') {
    return <IntroScreen onStart={startQuiz} />;
  }

  if (phase === 'question') {
    const question = shownQuestions[currentIndex];
    return (
      <QuestionScreen
        key={question.id}
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

  // phase === 'reveal'
  const reveal = resultId ? reveals[resultId] : null;
  if (!reveal) {
    // Should not happen, but degrade gracefully.
    return <IntroScreen onStart={startQuiz} />;
  }
  return <RevealScreen reveal={reveal} onRestart={restart} />;
}
