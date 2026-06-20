'use client';

// ─────────────────────────────────────────────────────────────
// SkillsetSection.jsx — complete redesign
//
// Layout:
//  - Four category tabs across the top
//  - LEFT: skill pills grid — each pill shows name + confidence %
//    Hovering a pill highlights it and pulses slightly
//  - RIGHT: Radar/spider chart built with SVG — no external chart lib needed.
//    Each axis = one skill. Polygon animates in when tab changes.
//    Hovering a pill on the left highlights its axis on the chart.
//
// Animations:
//  - Tab switch: pills stagger in from below, chart polygon morphs
//  - Pill hover: scale up + maroon glow, matching axis on chart brightens
//  - Section enter: whole section fades up on scroll
//
// No Java, no R, no TypeScript — only what Shubhranshu actually knows.
// ─────────────────────────────────────────────────────────────

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Skill categories ──────────────────────────────────────────
const categories = [
  {
    id: 'languages',
    label: 'Languages',
    color: '#5e2a3a',
    skills: [
      { name: 'Python',     level: 95 },
      { name: 'JavaScript', level: 75 },
      { name: 'HTML',       level: 95 },
      { name: 'CSS',        level: 95 },
    ],
  },
  {
    id: 'ml',
    label: 'ML / DL',
    color: '#5e2a3a',
    skills: [
      { name: 'TensorFlow',   level: 80 },
      { name: 'PyTorch',      level: 70 },
      { name: 'Keras',        level: 80 },
      { name: 'NumPy',        level: 85 },
      { name: 'Pandas',       level: 80 },
      { name: 'Scikit-Learn', level: 70 },
      { name: 'OpenCV',       level: 65 },
    ],
  },
  {
    id: 'web',
    label: 'Web & Backend',
    color: '#5e2a3a',
    skills: [
      { name: 'React',      level: 80 },
      { name: 'Next.js',    level: 75 },
      { name: 'Node.js',    level: 65 },
      { name: 'FastAPI',    level: 70 },
      { name: 'Flask',      level: 70 },
      { name: 'TailwindCSS',level: 80 },
      { name: 'SCSS',       level: 65 },
    ],
  },
  {
    id: 'data',
    label: 'Data & Tools',
    color: '#5e2a3a',
    skills: [
      { name: 'MySQL',      level: 90 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MS Excel',   level: 75 },
      { name: 'Tableau',    level: 70 },
      { name: 'Power BI',   level: 65 },
      { name: 'Docker',     level: 60 },
      { name: 'HuggingFace',level: 65 },
    ],
  },
];

// ── Radar chart ───────────────────────────────────────────────
// Pure SVG — no recharts, no d3 needed.
// Draws concentric polygon rings (grid), axis lines, axis labels,
// and an animated filled polygon for the skill levels.
const RadarChart = ({ skills, hoveredSkill }) => {
  const size    = 280;
  const cx      = size / 2;
  const cy      = size / 2;
  const radius  = 100;
  const levels  = 4; // concentric rings
  const n       = skills.length;

  // Convert polar coords to cartesian
  const toXY = (angle, r) => ({
    x: cx + r * Math.cos(angle - Math.PI / 2),
    y: cy + r * Math.sin(angle - Math.PI / 2),
  });

  // Angles evenly spaced around the circle
  const angles = skills.map((_, i) => (2 * Math.PI * i) / n);

  // Build the skill polygon points
  const skillPoints = skills.map((s, i) => toXY(angles[i], (s.level / 100) * radius));
  const skillPath   = skillPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ') + ' Z';

  // Build grid ring polygons
  const gridRings = Array.from({ length: levels }, (_, l) => {
    const r = ((l + 1) / levels) * radius;
    const pts = angles.map(a => toXY(a, r));
    return pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ') + ' Z';
  });

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full max-w-[300px] mx-auto"
      aria-label="Skill radar chart"
    >
      {/* Grid rings */}
      {gridRings.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="#5e2a3a" strokeOpacity={0.12} strokeWidth={1} />
      ))}

      {/* Axis lines from centre to each skill */}
      {angles.map((angle, i) => {
        const end  = toXY(angle, radius);
        const isHovered = hoveredSkill === skills[i].name;
        return (
          <line
            key={i}
            x1={cx} y1={cy}
            x2={end.x} y2={end.y}
            stroke="#5e2a3a"
            strokeOpacity={isHovered ? 0.7 : 0.2}
            strokeWidth={isHovered ? 2 : 1}
            className="transition-all duration-200"
          />
        );
      })}

      {/* Skill polygon — animates when skills change */}
      <motion.path
        key={skills.map(s => s.name).join(',')}
        d={skillPath}
        fill="#5e2a3a"
        fillOpacity={0.15}
        stroke="#5e2a3a"
        strokeWidth={2}
        strokeOpacity={0.7}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />

      {/* Dots on each skill vertex */}
      {skillPoints.map((p, i) => {
        const isHovered = hoveredSkill === skills[i].name;
        return (
          <motion.circle
            key={i}
            cx={p.x} cy={p.y} r={isHovered ? 5 : 3}
            fill={isHovered ? '#9c8f75' : '#5e2a3a'}
            className="transition-all duration-200"
          />
        );
      })}

      {/* Axis labels */}
      {skills.map((s, i) => {
        const labelR  = radius + 22;
        const pos     = toXY(angles[i], labelR);
        const isHovered = hoveredSkill === s.name;
        return (
          <text
            key={i}
            x={pos.x} y={pos.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={isHovered ? 11 : 9.5}
            fontFamily="var(--font-geist-mono)"
            fill={isHovered ? '#5e2a3a' : '#9c8f75'}
            className="transition-all duration-200 select-none"
            fontWeight={isHovered ? 700 : 400}
          >
            {s.name}
          </text>
        );
      })}

      {/* Centre dot */}
      <circle cx={cx} cy={cy} r={3} fill="#5e2a3a" fillOpacity={0.4} />

      {/* % labels on grid rings */}
      {Array.from({ length: levels }, (_, l) => {
        const pct = Math.round(((l + 1) / levels) * 100);
        const r   = ((l + 1) / levels) * radius;
        return (
          <text key={l} x={cx + 4} y={cy - r + 4}
            fontSize={7} fill="#9c8f75" fontFamily="var(--font-geist-mono)"
            className="select-none">
            {pct}%
          </text>
        );
      })}
    </svg>
  );
};

// ── Skill pill ────────────────────────────────────────────────
// Shows skill name + level bar. Hover triggers highlight on chart.
const SkillPill = ({ skill, onHover, isHovered, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: index * 0.06 }}
    onMouseEnter={() => onHover(skill.name)}
    onMouseLeave={() => onHover(null)}
    className={`cursor-default rounded-xl p-3 border transition-all duration-250
                ${isHovered
                  ? 'bg-[#5e2a3a] border-[#5e2a3a] shadow-lg shadow-[#5e2a3a]/25 -translate-y-0.5'
                  : 'bg-white/50 border-[#5e2a3a]/15 hover:border-[#5e2a3a]/40'
                }`}
  >
    <div className="flex items-center justify-between mb-1.5">
      <span className={`font-geist-mono text-[0.78rem] font-semibold transition-colors duration-200
                        ${isHovered ? 'text-white' : 'text-[#1d2e3f]'}`}>
        {skill.name}
      </span>
      <span className={`font-geist-mono text-[0.7rem] transition-colors duration-200
                        ${isHovered ? 'text-white/80' : 'text-[#9c8f75]'}`}>
        {skill.level}%
      </span>
    </div>

    {/* Confidence bar */}
    <div className={`h-1 rounded-full overflow-hidden
                     ${isHovered ? 'bg-white/20' : 'bg-[#5e2a3a]/10'}`}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{ duration: 0.6, delay: index * 0.06 + 0.1, ease: 'easeOut' }}
        className={`h-full rounded-full transition-colors duration-200
                    ${isHovered ? 'bg-white' : 'bg-[#5e2a3a]'}`}
      />
    </div>
  </motion.div>
);

// ── Main component ────────────────────────────────────────────
const SkillsetSection = () => {
  const [activeTab,     setActiveTab]     = useState(categories[0].id);
  const [hoveredSkill,  setHoveredSkill]  = useState(null);
  const [hasAnimated,   setHasAnimated]   = useState(false);
  const sectionRef = useRef(null);

  const activeCategory = categories.find(c => c.id === activeTab);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasAnimated(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Reset hovered skill when tab changes
  const handleTabChange = (id) => {
    setHoveredSkill(null);
    setActiveTab(id);
  };

  return (
    <motion.section
      id="skillset"
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="py-[8vh] px-[2vw] xl:px-[8vw] bg-[#f6f0e6]/85 overflow-hidden"
    >
      {/* Section heading */}
      <div className="relative text-center mb-[6vh]">
        <h1 className="text-[4rem] lg:text-[5rem] font-bold text-[#e0b0bc]/50 font-geist select-none">
          SKILLSET
        </h1>
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       text-[2rem] lg:text-[2.5rem] font-bold text-[#5e2a3a] font-geist whitespace-nowrap">
          My Skills
        </h2>
      </div>

      {/* ── Category tabs ─────────────────────────────────────────
          Pill-shaped tabs. Active tab gets filled maroon bg.
          Inactive tabs have maroon border only.
          A sliding underline follows the active tab.
      ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleTabChange(cat.id)}
            className={`relative px-5 py-2 rounded-full font-geist text-[0.85rem] font-semibold
                        border-2 transition-all duration-300
                        ${activeTab === cat.id
                          ? 'bg-[#5e2a3a] border-[#5e2a3a] text-white shadow-md shadow-[#5e2a3a]/25'
                          : 'bg-transparent border-[#5e2a3a]/30 text-[#5e2a3a] hover:border-[#5e2a3a] hover:bg-[#5e2a3a]/5'
                        }`}
          >
            {cat.label}
            {/* Active indicator dot */}
            {activeTab === cat.id && (
              <motion.span
                layoutId="activeTab"
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#9c8f75]"
              />
            )}
          </button>
        ))}
      </div>

      {/* ── Main content: pills left, chart right ────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">

        {/* Pills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            {activeCategory.skills.map((skill, i) => (
              <SkillPill
                key={skill.name}
                skill={skill}
                index={i}
                onHover={setHoveredSkill}
                isHovered={hoveredSkill === skill.name}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Radar chart */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + '-chart'}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-3"
          >
            <RadarChart
              skills={activeCategory.skills}
              hoveredSkill={hoveredSkill}
            />
            {/* Hint text */}
            <p className="text-[#9c8f75] text-[0.75rem] font-geist-mono text-center">
              hover a skill to highlight its axis
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default SkillsetSection;