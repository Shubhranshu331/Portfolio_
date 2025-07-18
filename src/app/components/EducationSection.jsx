'use client';

// Import required dependencies
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Education data array - contains the timeline entries
const education = [
  {
    year: 2019,
    image: '/images/Education/MPVM_Ganga_Gurukulam_pic.png',
    title: 'High School',
    details: [
      { label: 'School Name:', value: 'Mpvm Ganga Gurukulam, Prayagraj' },
      { label: 'Board:', value: 'CBSE' },
      { label: 'Percentage:', value: '87%' }
    ]
  },
  {
    year: 2021,
    image: '/images/Education/MPVM_Ganga_Gurukulam_pic.png',
    title: 'Intermediate',
    details: [
      { label: 'School Name:', value: 'Mpvm Ganga Gurukulam, Prayagraj' },
      { label: 'Board:', value: 'CBSE' },
      { label: 'Percentage:', value: '83%' }
    ]
  },
  {
    year: 2025,
    image: '/images/Education/UCER_pic.png',
    title: 'Bachelor\'s in Technology',
    details: [
      { label: 'College Name:', value: 'United College of Engineering and Research, Prayagraj' },
      { label: 'Branch:', value: 'CSE' },
      { label: 'CGPA:', value: '6.77' }
    ]
  }
];

// EducationSection component
const EducationSection = () => {
  // State to track the currently selected year
  const [selectedYear, setSelectedYear] = useState(education[0].year);

  // Effect to set the initial selected year when the component mounts
  useEffect(() => {
    setSelectedYear(education[0].year);
  }, []);

  // Animation variants for fade-in effect
  const variants = {
    hidden: { opacity: 0, y: 20 }, // Initial state: fully transparent and slightly shifted down
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } // Final state: fully visible and in position
  };

  // Handler for date button clicks
  const handleYearClick = (year) => {
    setSelectedYear(year);
    console.log(`Selected year: ${year}`); // Debug log to confirm click event
  };

  return (
    // Main section with fade-in animation
    <motion.section
      id="education"
      className="py-[2vh] sm:py-[4vh] md:py-[6vh] lg:py-[8vh] px-[4vw] sm:px-[2vw] xl:px-[8vw] bg-[var(--background)]"
      initial="hidden" // Start with hidden state
      animate="visible" // Animate to visible state when the page loads
      variants={variants} // Use the defined variants for animation
    >
      {/* Title Section */}
      <motion.div
        className="relative text-center mb-[4vh]"
        initial="hidden"
        whileInView="visible" // Trigger animation when this div enters the viewport
        viewport={{ once: true, amount: 0.2 }} // Only animate once, when 20% of the element is in view
        variants={variants}
      >
        {/* Background "EDUCATION" text */}
        <h1
          className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.375rem] font-bold text-[#e0b0bc] opacity-50"
          style={{ fontFamily: 'Faktor, Raleway, sans-serif' }}
        >
          EDUCATION
        </h1>
        {/* Foreground "My Education" text */}
        <h2
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-[var(--cta-border)]"
          style={{ fontFamily: 'Raleway, sans-serif' }}
        >
          My Education
        </h2>
      </motion.div>

      {/* Timeline Container */}
      <div
        id="timeline"
        className="w-full sm:w-[40rem] h-auto min-h-[10rem] sm:min-h-[3rem] my-[2.5rem] mx-auto relative bg-[var(--background)] md:bg-[url('http://www.csslab.cl/ejemplos/timelinr/latest/images/dot.gif')] bg-[length:0.5rem_0.5rem] bg-[position:6.25rem_top] bg-repeat-y flex flex-col sm:flex-row"
      >
        {/* Dates List - Contains the buttons for each year */}
        <ul id="dates" className="w-full sm:w-[5.25rem] h-[9rem] sm:h-[3rem] flex sm:flex-col justify-between sm:justify-start ">
          {education.map((item, index) => (
            <motion.li
              key={item.year}
              className="flex-none w-[6.25rem] sm:w-[20] h-[3rem] sm:h-[9rem] md:h-[9rem] list-none flex items-center justify-center sm:justify-start"
              initial={{ opacity: 0, x: -20 }} // Initial animation state for each date button
              animate={{ opacity: 1, x: 0 }} // Animate to visible state
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation for each button
            >
              {/* Button for the Date - Simplified for better click detection */}
              <button
                type="button"
                className={`w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] md:w-[3.5rem] md:h-[3.5rem] flex items-center justify-center font-raleway font-bold tracking-[0.15em] uppercase cursor-pointer transition-all duration-300 outline-none focus:outline-none ${
                  selectedYear === item.year
                    ? 'text-[1.375rem] sm:text-[2.125rem] text-[var(--cta-border)]'
                    : 'text-[#800000] opacity-75 hover:text-[var(--cta-hover)]'
                }`}
                onClick={() => handleYearClick(item.year)} // Use a dedicated handler for clicks
              >
                {item.year}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Issues List - Displays the education details for the selected year */}
        <ul id="issues" className="w-full  h-auto  flex-1 pt-[0.5rem] sm:pt-0 pl-[1.25rem] sm:pl-[1.875rem]">
          {education.map((item) => (
            <motion.li
              key={item.year}
              id={item.year}
              className={`w-full max-w-[25rem] sm:max-w-[21.875rem] mx-auto h-full list-none text-center ${
                selectedYear === item.year ? 'block' : 'hidden'
              }`}
              initial={{ opacity: 0, x: 20 }} // Initial animation state for each detail section
              animate={{ opacity: selectedYear === item.year ? 1 : 0, x: selectedYear === item.year ? 0 : 20 }} // Fade in/out based on selection
              transition={{ duration: 0.3 }} // Smooth transition for visibility
            >
              {/* Image for the selected education entry */}
              <Image
                src={item.image}
                alt={item.title}
                width={180}
                height={135}
                className={`mx-auto my-[0.625rem] sm:my-[0.75rem] rounded-lg object-cover transition-transform duration-[2s] ease-in-out ${
                  selectedYear === item.year ? 'scale-110' : 'scale-70'
                }`}
              />
              {/* Title of the education entry */}
              <h1 className="text-[1rem] sm:text-[1.25rem] text-[#5e2a3a] font-raleway font-bold tracking-[0.15em] uppercase text-center text-shadow-[1px_1px_2px_var(--heading)] mt-[0.75rem] sm:mt-[1.25rem]">
                {item.title}
              </h1>
              {/* Details list for the education entry */}
              <ul className="text-[#222222] font-lato text-[1rem] min-w-0 my-[0.625rem] sm:my-[0.75rem] mx-[1.125rem] sm:mx-[1.375rem] pb-[1.25rem] sm:pb-0">
                {item.details.map((detail, index) => (
                  <li key={index} className="mb-[1.5vh] text-center break-words">
                    <span className="font-bold text-[#5e2a3a] text-[1.2rem]">{detail.label}</span>
                    <br />
                    {detail.value}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>

        {/* Gradient Overlays for Visual Effect */}
        <div
          id="grad_top"
          className="w-full h-[1.875rem] sm:h-[3.75rem] absolute top-0"
          style={{ background: 'url(/images/timeline/grad_top.png) repeat-x' }}
        ></div>
        
      </div>
    </motion.section>
  );
};

export default EducationSection;
