import React, { useState } from "react";
import Select from "react-select";

const languages = [
  { value: "JavaScript", label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { value: "TypeScript", label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { value: "Python", label: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { value: "Java", label: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { value: "Go", label: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { value: "Rust", label: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" },
  { value: "C++", label: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { value: "C#", label: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { value: "Ruby", label: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
  { value: "Swift", label: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
];

export default function LanguageDropdown() {
  const [selected, setSelected] = useState(languages.find(l => l.value === "Python"));

  return (
    <div className="w-64 p-4 bg-gray-900 text-white">
      <h2 className="mb-2 text-gray-400">Select Language</h2>
      <Select
        options={languages}
        value={selected}
        onChange={setSelected}
        formatOptionLabel={(lang) => (
          <div className="flex items-center">
            <img src={lang.icon} alt={lang.label} className="w-5 h-5 mr-2" />
            <span>{lang.label}</span>
          </div>
        )}
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: "#1f2937",
            borderColor: "#374151",
            color: "white",
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "#111827",
            borderRadius: "0.5rem",
          }),
          singleValue: (base) => ({
            ...base,
            color: "white",
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#3b82f6" : "#111827",
            color: state.isFocused ? "white" : "#d1d5db",
            cursor: "pointer",
          }),
        }}
      />
    </div>
  );
}
