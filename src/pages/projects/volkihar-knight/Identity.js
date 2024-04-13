
import volkiharEnderalLarge from 'assets/volkihar-enderal.jpg';
import volkiharEnderalPlaceholder from 'assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from 'assets/volkihar-enderal.jpg';
import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectTextRow,
} from 'layouts/Project';

import { Fragment } from 'react';
import styles from './Identity.module.css';
import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import SkillProgressBar from './SkillProgressBar';
import React from "react";
import Timeline from "./Timeline";

const title = 'Identity';
const description =
  'My Skills in detail.';

const skills = [
  { skill: 'Python', percentage: 85 },
  { skill: 'Java', percentage: 62 },
  { skill: 'C#', percentage: 75 },
  { skill: 'C', percentage: 70 },
  { skill: 'HTML', percentage: 95 },
  { skill: 'CSS', percentage: 80 },
  { skill: 'Javascript', percentage: 65 },
  { skill: 'PHP', percentage: 58 },
];
const softskills = [
  { skill: 'Unity', percentage: 75 },
  { skill: 'Unreal Engine', percentage: 80 },
  { skill: 'Cinema 4D', percentage: 75 },
  { skill: 'Cisco Packet Tracer', percentage: 90 },
  { skill: 'Adobe Photoshop', percentage: 80 },
  { skill: 'Adobe Lightroom', percentage: 90 },
  { skill: 'Adobe Illustrator', percentage: 60 },
  { skill: 'Android Development Studio', percentage: 55 },
];

const timelineData = [
  { 
    id: 1, 
    date: 'Ongoing', 
    description: "Bachelor's in Computer Science and Engineering",  
    institution: "Southeast University", board: "Dhaka, Bangladesh"
  },
  { 
    id: 2, 
    date: '2021', 
    description: 'Diploma in Computer Engineering' , 
    institution: "Dhaka Polytechnic Institute" , 
    grade: "CGPA: 3.45", board: "Dhaka, Bangladesh"
  },
  { 
    id: 3, 
    date: '2017', 
    description: 'SSC in Science' , 
    institution: "Rayhan School And College", 
    board:"Dhaka, Bangladesh" , 
    grade: "GPA: 5.00" 
  },
  // Add more education events as needed
];
const workData = [
  { 
    id: 1, 
    date: 'Present', 
    description: "Freelance Web Developer",
    duration: "Duration: May 2022 - Present",
    responsibilities: "Key Services Offered:",
    r1: "Custom website design and development.",
    r2: "Responsive web development to ensure compatibility across all devices.",
    r3: "E-commerce website development with secure payment gateways.",
    r4: "Website maintenance and updates to keep sites running smoothly.",
  },
  { 
    id: 2, 
    date: '2022', 
    description: 'Game Developer Intern', 
    company: "Company: GameXltd",
    duration: "Duration: July 2022 - December 2022",
    r1: "Created blueprints in Unreal Engine for various game mechanics and features.",
    r2: "Developed 3D models for game assets, contributing to the visual aesthetics of projects.",
    r3: "Provided game mechanics ideas and suggestions to enhance gameplay experience.",
  },
  { 
    id: 3, 
    date: '2021', 
    description: 'Network Engineer Intern' , 
    company: "Company: IT Bangladesh", 
    duration: "Duration: November 2021 - March 2022",
    r1: "Collaborated on Cisco router configurations and routing protocols.",
    r2: "Developed complex network simulations to test various scenarios.",
    r3: "Assisted in troubleshooting and resolving network issues.",
  },
  // Add more timeline events as needed
];

export function VolkiharKnight() {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer>
      <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title={title} center centerMobile noMargin
        />
        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.education}>
              <ProjectSectionHeading >Language Proficiency</ProjectSectionHeading>
              <div className="portfolio-container">
                <div className="skills-list">
                  {skills.map((skill, index) => (
                    <SkillProgressBar key={index} skill={skill.skill} percentage={skill.percentage} />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.education}>
              <ProjectSectionHeading center centerMobile noMargin>Software Fluency</ProjectSectionHeading>
              <div className="portfolio-container">
                <div className="skills-list">
                  {softskills.map((skill, index) => (
                    <SkillProgressBar key={index} skill={skill.skill} percentage={skill.percentage} />
                  ))}
                </div>
              </div>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        
        <ProjectSection backgroundElement={
            <Image
              srcSet={[volkiharEnderal, volkiharEnderalLarge]}
              placeholder={volkiharEnderalPlaceholder}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
          }>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <div className={styles.education}>
                <ProjectSectionHeading>Education</ProjectSectionHeading>
                <Timeline timelineData={timelineData} />
              </div>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <div className={styles.education}>
                <ProjectSectionHeading>Experience</ProjectSectionHeading>
                <Timeline timelineData={workData} />
              </div>
            </ProjectSectionContent>
          </ProjectSectionColumns>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Button
                secondary
                iconHoverShift
                icon="chevronRight"
                href="https://shoaib.zahoorbd.com/portfolio"
              >
                Download CV
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
          
        </ProjectSection>
        
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
