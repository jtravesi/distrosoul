/**
 * PMD-style choice menu. Renders a vertical list of options as
 * `choice-button` items and reports the selected option upward.
 *
 * Each option must have a `text` field. Any extra fields (id, scoring
 * data, path, etc.) are passed back to `onSelect` untouched.
 */
export default function Choices({ options, onSelect, disabled = false }) {
  return (
    <ul className="space-y-2 md:space-y-3 max-w-2xl w-full">
      {options.map((option, index) => (
        <li key={option.id ?? index}>
          <button
            type="button"
            className="choice-button"
            disabled={disabled}
            onClick={() => onSelect?.(option, index)}
          >
            {option.text}
          </button>
        </li>
      ))}
    </ul>
  );
}
