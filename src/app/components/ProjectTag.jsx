import React from "react";

const ProjectTag = ({ tag, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-yellow-400"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-sm cursor-pointer`}
      onClick={() => onClick(tag)}
    >
      {tag}
    </button>
  );
};

export default ProjectTag;