import { useState } from 'react';
import TextBox from './TextBox';
import Choices from './Choices';
import { useLanguage } from '../lib/LanguageContext';

/**
 * Shows one personality question with its 4 options.
 * The choices appear only once the question text has finished typing
 * so the user reads the prompt before committing.
 */
export default function QuestionScreen({ question, index, total, onAnswer }) {
  const [choicesReady, setChoicesReady] = useState(false);
  const { t } = useLanguage();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 gap-6">
      <p className="font-display text-ink-dim text-xs md:text-sm tracking-widest">
        {index + 1} / {total}
      </p>

      <TextBox
        text={t(question.text)}
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
