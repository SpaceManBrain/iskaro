import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "ENG" },
  { code: "sv", label: "SE" },
  { code: "nb", label: "NOR" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("iskaro_language", code);
  };

  return (
    <div
      className="language-switcher inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-high rounded text-[10px] font-label-caps tracking-widest text-outline"
      aria-label="Choose language"
    >
      {languages.map((language, index) => (
        <span key={language.code} className="inline-flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => changeLanguage(language.code)}
            className={
              i18n.resolvedLanguage === language.code
                ? "text-tertiary"
                : "text-on-surface-variant hover:text-on-surface transition-colors"
            }
            aria-pressed={i18n.resolvedLanguage === language.code}
          >
            {language.label}
          </button>
          {index < languages.length - 1 ? <span aria-hidden="true">•</span> : null}
        </span>
      ))}
    </div>
  );
}
