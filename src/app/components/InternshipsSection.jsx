'use client';

// Import required dependencies
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { EyeIcon } from '@heroicons/react/24/solid'; // Importing EyeIcon from Heroicons

// Define internship data array with 5 internships, each with image, PDF, and details
const internships = [
  {
    id: 1,
    title: 'Biostatistics (Teachnook)',
    image: '/images/internships/Internship1.png',
    pdf: '/internships/Internship1.pdf',
    details: {
      'Programming Language': ['Python', 'R'],
      'Concepts': ['statistical inference', 'hypothesis testing', 'epidemiological studies', 'data visualization'],
      'Description': 'Biostatistics program centered on applying Machine Learning to complex biological and health data. It leveraged predictive modeling for insightful analysis and data-driven decision-making in life sciences.',
    },
  },
  {
    id: 2,
    title: 'AI/ML for Geodata Analysis (ISRO/IIRS)',
    image: '/images/internships/Internship2.png',
    pdf: '/internships/Internship2.pdf',
    details: {
      'Programming Language': ['Python'],
      'Concepts': ['Geodata analysis', 'satellite imagery processing', 'spatial statistics', 'predictive modeling'],
      'Description': 'Focused on using Artificial Intelligence and Machine Learning for analyzing geographical data. This involved applying advanced techniques for processing and interpreting geospatial information.',
    },
  },
  {
    id: 3,
    title: 'Machine Learning (MNNIT)',
    image: '/images/internships/Internship3.png',
    pdf: '/internships/Internship3.pdf',
    details: {
      'Programming Language': ['Python'],
      'Concepts': ['Deep Learning', 'CNNs', 'UNet', 'semantic segmentation'],
      'Description': 'The internship applied deep learning, specifically UNet architecture, for image segmentation and polyp detection within medical colonoscopy images. It focused on advanced image processing techniques to aid in diagnostics.',
    },
  },
  {
    id: 4,
    title: 'Cloud Infrastructure (Oracle)',
    image: '/images/internships/Internship4.png',
    pdf: '/internships/Internship4.pdf',
    details: {
      'Concepts': ['Cloud computing', 'IaaS', 'PaaS', 'networking in cloud', 'storage services', 'cloud security', 'virtual machines'],
      'Description': 'Achieved certification in Oracle Cloud Infrastructure (OCI), covering foundational concepts of cloud computing services. This demonstrates a core understanding of cloud architecture, compute, and storage.',
    },
  },
  {
    id: 5,
    title: 'Full-stack Development, MERN (IBM)',
    image: '/images/internships/Internship5.png',
    pdf: '/internships/Internship5.pdf',
    details: {
      'Programming Language': ['HTML', 'CSS', 'JavaScript', 'Node.Js'],
      'Concepts': ['Responsive-Design', 'Animation', 'API interactions', 'data manipulation'],
      'Description': 'Completed a course focused on extending IBM DOORS Next functionality using JavaScript. This involved learning practical scripting for customizing and enhancing requirements management tools.',
    },
  },
];

// Main section component for rendering all internships
const InternshipsSection = () => {
  // State to track the zoomed PDF in the modal
  const [zoomedImage, setZoomedImage] = useState(null);

  // Handle image click to open PDF in modal
  const handleImageClick = (pdf) => {
    setZoomedImage(pdf);
  };

  // Close the PDF modal
  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  // Animation variants for fade-in effect
  const variants = {
    hidden: { opacity: 0, y: 20 }, // Initial state: invisible and slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } // Final state: fully visible
  };

  return (
    <section id="internships" className="py-[4vh] sm:py-[8vh] px-[2vw] xl:px-[8vw] bg-[#f6f0e6]"> {/* Responsive padding for section */}
      {/* Heading with fade-in animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of heading is in viewport, only once
        variants={variants}
        className="relative text-center mb-[4vh]"
      >
        <h1
          className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.375rem] font-bold text-[#e0b0bc] opacity-50"
          style={{ fontFamily: 'Faktor, Raleway, sans-serif' }}
        >
          INTERNSHIPS
        </h1>
        <h2
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-4xl lg:text-5xl font-bold text-[#5e2a3a]"
          style={{ fontFamily: 'Raleway, sans-serif' }}
        >
          My Internships
        </h2>
      </motion.div>

      {/* Carousel with fade-in animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of carousel is in viewport, only once
        variants={variants}
        className="carousel" mask
      >
        {internships.map((internship, index) => (
          <article
            key={internship.id}
            style={{
              '--i': index,
            }}
            className="shadow-lg"
          >
            <div className="relative group">
              <Image
                src={internship.image}
                alt={`${internship.title} certificate`}
                width={280}
                height={200}
                className="carousel-img transition-opacity duration-300 group-hover:opacity-50"
                priority={index === 0}
              />
              <button
                onClick={() => handleImageClick(internship.pdf)}
                className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 p-2 rounded-full shadow-md z-20"
                aria-label="View certificate PDF"
              >
                <EyeIcon className="w-6 h-6 text-gray-800" />
              </button>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30 p-4 z-10">
                <ul className="text-white space-y-2 text-base">
                  {Object.entries(internship.details)
                    .filter(([key]) => key !== 'Description')
                    .map(([key, value]) => (
                      <li key={key} className="flex flex-col">
                        <div className="flex gap-2">
                          <span className="font-bold">{key}:</span>
                          <span>{Array.isArray(value) ? value.join(', ') : value}</span>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <h2 className="text-[#5e2a3a] font-bold">{internship.title}</h2>
            <p className="text-[#222222] text-1.5rem">{internship.details.Description}</p>
          </article>
        ))}
      </motion.div>

      {/* Zoomed PDF Modal */}
      {zoomedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseZoom}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-[90vw] max-h-[90vh]"
          >
            <iframe
              src={zoomedImage}
              className="w-[90vw] h-[90vh]"
              title="Certificate"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default InternshipsSection;