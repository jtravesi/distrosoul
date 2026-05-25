import { useState } from 'react';
import TextBox from './TextBox';
import Choices from './Choices';

/**
 * The fixed final question. Its options carry a `path` (forward / plan /
 * help / pace) rather than nature points — the path picks the distro
 * within the winning nature's family.
 */
export default function FinalQuestionScreen({ question, onAnswer }) {
  const [choicesReady, setChoicesReady] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 gap-6">
      <p className="font-display text-accent-gold text-xs md:text-sm tracking-widest">
        Last question
      </p>

      <TextBox
        text={question.text}
        onDone={() => setChoicesReady(true)}
      />

      {choicesReady && (
        <Choices
          options={question.options}
          onSelect={(option) => onAnswer(option)}
        />
      )}
    </main>
  );
}
