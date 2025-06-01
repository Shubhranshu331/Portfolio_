"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {

    metric: "FrontEnd",
    value: "5",
    postfix: "+"
  },
  {

    metric: "Android Development",
    value: "1",
    postfix: "+"
  },
  {

    metric: "Machine Learning",
    value: "5",
    postfix: "+"
  },
  {

    metric: "Techinical skills",
    value: "10",
    postfix: "+"
  },
  {

    metric: "Concepts",
    value: "20",
    postfix: "+"
  },
];

const AchievementsSection = () => {
  return (
    <div className="mb-0 xl:gap-16 sm:py-4 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-lg font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;