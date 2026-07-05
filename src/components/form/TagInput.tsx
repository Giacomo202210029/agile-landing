import { useState, type KeyboardEvent } from "react";

interface TagInputProps {
  id: string;
  label: string;
  hint: string;
  placeholder?: string;
  value: string[];
  onChange: (next: string[]) => void;
}

export function TagInput({ id, label, hint, placeholder, value, onChange }: TagInputProps) {
  const [draft, setDraft] = useState("");

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    e.preventDefault();
    const next = draft.trim();
    if (!next || value.includes(next)) {
      setDraft("");
      return;
    }
    onChange([...value, next]);
    setDraft("");
  }

  function removeTag(tag: string) {
    onChange(value.filter((t) => t !== tag));
  }

  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      <div className="tag-input-row flex flex-wrap items-center gap-2 py-2">
        <div className="flex flex-wrap gap-2">
          {value.map((tag) => (
            <span key={tag} className="tag-pill">
              <span>{tag}</span>
              <button type="button" aria-label={`Quitar ${tag}`} onClick={() => removeTag(tag)}>
                ×
              </button>
            </span>
          ))}
        </div>
        <input
          id={id}
          className="flex-1 min-w-[120px] bg-transparent border-none focus:ring-0 font-body-md text-[15px] py-1"
          placeholder={placeholder ?? "Escribe y presiona Enter"}
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <p className="field-hint">{hint}</p>
    </div>
  );
}
