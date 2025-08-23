import React, { useState } from "react";
import Select from "react-select";

const themes = [
  { value: "VS Dark", label: "VS Dark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { value: "VS Light", label: "VS Light", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { value: "GitHub Dark", label: "GitHub Dark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { value: "Monokai", label: "Monokai", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Monokai_Color_Scheme_Logo.png" },
  { value: "Solarized Dark", label: "Solarized Dark", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Solarized_color_scheme_logo.svg" },
];

export default function ThemeDropdown() {
  const [selected, setSelected] = useState(themes[0]);

  return (
    <div className="w-64 p-4 bg-gray-900 text-white">
      <h2 className="mb-2 text-gray-400">Select Theme</h2>
      <Select
        options={themes}
        value={selected}
        onChange={setSelected}
        formatOptionLabel={(theme) => (
          <div className="flex items-center">
            <img src={theme.icon} alt={theme.label} className="w-5 h-5 mr-2" />
            <span>{theme.label}</span>
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
