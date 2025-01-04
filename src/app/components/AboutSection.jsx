"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
// import { startTransition } from 'react/cjs/react.production.min';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title:"Education",
        id:"education",
        content:(
            <ul class="list-disc">
                <li>Pursuing Bachelor of Technology from United College of Engineering and Research, Prayagraj</li>
                <li>Intermediate (10+2) from MPVM Ganga Gurukulam</li>
                <li>High Scchool from MPVM Ganga Gurukulam</li>
            </ul>
        )
    },
    {
        title:"Programming Languages",
        id:"languages",
        content:(
            <ul class="list-disc">
                <li>C</li>
                <li>Python</li>
                <li>Java</li>
                <li>R</li>
            </ul>
        )
    },
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul class="list-disc">
                <li>HTML and CSS</li>
                <li>ReactJs and NextJs</li>
                <li>DBMS(MySQL)</li>
                <li>Machine learning and Deep learning</li>
                <li>Android Development</li>
            </ul>
        )
    },
    {
        title:"Internship Training",
        id:"training",
        content:(
            <ul class="list-disc">
                <li>Machine learning and Deep Learning from MNNIT, Allahabad (June 2024- July 2024)</li>
                <li>Android Deveopment from TuteDude, online (2023-2024)</li>
                <li>Full stack Development (MERN) from IBM, Prayagraj (August 2022- September2022)</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }


    return <section className="text-white">
        <div id="about" className="md:grid md:grid-cols-2 mt-12 gap-8 items-center py-8 px-4 xl:gap16 sm:py-16 xl:px-16 ">
            <Image src="/images/About_image.png" width={700} height={600} alt='About_Image'/>
            <div className= "mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base lg:text-lg">I am a dedicated Computer Science Engineer with a proven track record in C, Python, and Java. I am currently delving into R to further expand my skillset. I am passionate about innovation and eager to contribute to cutting-edge projects.</p>
                <div className="flex flex-row mt-8">
                    <TabButton selectTab={() =>
                        handleTabChange("education")}
                        active={tab === "education"}>
                        {" "}Education{" "}
                    </TabButton>
                    <TabButton selectTab={() =>
                        handleTabChange("languages")}
                        active={tab === "languages"}>
                        {" "}Programming Languages{" "}
                    </TabButton>
                    <TabButton selectTab={() =>
                        handleTabChange("skills")}
                        active={tab === "skills"}>
                        {" "}Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() =>
                        handleTabChange("training")}
                        active={tab === "training"}>
                        {" "}Internship Training{" "}
                    </TabButton>
                </div>
                <div className="mt-8" >{TAB_DATA.find((t) =>
                    t.id === tab).content}
                    </div>
            </div>
        </div>
    </section>
}

export default AboutSection