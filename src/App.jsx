import styles from './App.module.css';
import reactLogo from './assets/react.svg';
import jsLogo from './assets/js.svg';
import typescriptLogo from './assets/typescript.svg';
import pythonLogo from './assets/python.svg';
import nodejsLogo from './assets/nodejs.svg';
import cLogo from './assets/c.svg';
import javaLogo from './assets/java.svg';
import TextType from './TextType';
import TechStackIcon from './TechStackIcon';
import Particles from './Particles';
import SpotlightCard from './SpotlightCard';
import Loader from './Loader';
import SectionTabs from './SectionTabs';
import SocialIcons from './SocialIcons';
import AnimatedBackground from './AnimatedBackground';
import { useState, useEffect } from 'react';

// Removed unused imports: viteLogo, cssLogo, htmlLogo, goLogo, phpLogo, rubyLogo, swiftLogo

const sectionTabs = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'languages', label: 'Languages' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  return (
    <>
      <AnimatedBackground />
      <SectionTabs tabs={sectionTabs} />
      <SocialIcons />
      <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflow: 'hidden', background: 'transparent' }}>
        {/* Particles background at the top */}
        <div style={{ width: '100%', height: '350px', position: 'relative' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={400}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className={styles.container} style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
            <h1 className={styles.aboutMe} style={{ background: 'none', boxShadow: 'none', marginBottom: 0, padding: 0 }}>
              <TextType
                text={["Welcome To My Portfolio!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                cursorBlinkDuration={0.7}
              />
            </h1>
          </div>
          {/* About Me SpotlightCard */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(162, 89, 255, 0.25)" style={{ minWidth: 320, maxWidth: 410, width: '100%' }}>
              <section id="about" className={styles.aboutMe} style={{ background: 'none', boxShadow: 'none', margin: 0, padding: 0 }}>
                <h1>About Me</h1>
                <p>
                  Hi, I'm James Upson, a passionate full stack developer with experience in building modern, interactive web applications as well as accounting software. I love creating user-friendly interfaces as well as developing side projects when I need something to help with my work.
                </p>
                <button className={styles.aboutMeButton}>Learn More</button>
              </section>
            </SpotlightCard>
          </div>
          {/* Languages I Know SpotlightCard */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(162, 89, 255, 0.25)" style={{ minWidth: 320, maxWidth: 410, width: '100%' }}>
              <div id="languages">
                <h1 style={{ textAlign: 'center', width: '100%' }}>Languages I Know</h1>
                <div className={styles.languages}>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                    <div className={styles.languageIconBox}>
                      <TechStackIcon TechStackIcon={jsLogo} Language="JavaScript" />
                    </div>
                    <div className={styles.languageIconBox}>
                      <TechStackIcon TechStackIcon={reactLogo} Language="React" />
                    </div>
                    <div className={styles.languageIconBox}>
                      <TechStackIcon
                        TechStackIcon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        Language="CSS"
                      />
                    </div>
                    <div className={styles.languageIconBox}>
                      <TechStackIcon
                        TechStackIcon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        Language="HTML"
                      />
                    </div>
                    <div className={styles.languageIconBox}>
                      <TechStackIcon TechStackIcon={typescriptLogo} Language="TypeScript" />
                    </div>
                    <div className={styles.languageIconBox}>
                      <TechStackIcon TechStackIcon={pythonLogo} Language="Python" />
                    </div>
                    <div className={styles.languageIconBox}>
                      <TechStackIcon TechStackIcon={nodejsLogo} Language="Node.js" />
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                    <div className={styles.languageIconBox}>
                      <TechStackIcon TechStackIcon={cLogo} Language="C" />
                    </div>
                    <div className={styles.languageIconBox}>
                      <TechStackIcon TechStackIcon={javaLogo} Language="Java" />
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
          {/* Projects, Certificates, Experience SpotlightCards */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(162, 89, 255, 0.25)" style={{ minWidth: 320, maxWidth: 410, width: '100%' }}>
              <div id="projects">
                <h1 style={{ textAlign: 'center', width: '100%' }}>Projects</h1>
                <p>Current projects completed: 8</p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(162, 89, 255, 0.25)" style={{ minWidth: 320, maxWidth: 410, width: '100%' }}>
              <div id="certificates">
                <h1 style={{ textAlign: 'center', width: '100%' }}>Certificates</h1>
                <p>Certifications Achieved: 3</p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(162, 89, 255, 0.25)" style={{ minWidth: 320, maxWidth: 410, width: '100%' }}>
              <div id="experience">
                <h1 style={{ textAlign: 'center', width: '100%' }}>Years of Experience</h1>
                <p>Years Of Experience: 1</p>
              </div>
            </SpotlightCard>
          </div>
          {/* Contact Cards Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', margin: '2.5rem 0' }}>
            <div id="contact">
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(162, 89, 255, 0.25)" style={{ minWidth: 320, maxWidth: 410 }}>
                <h2>Contact Me</h2>
                <p>Email: <a href="mailto:upsonjames1@gmail.com" style={{ color: '#a259ff' }}>upsonjames1@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#a259ff' }}>linkedin.com</a></p>
              </SpotlightCard>
            </div>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(162, 89, 255, 0.25)" style={{ minWidth: 320, maxWidth: 410 }}>
              <h2>Let's Connect</h2>
              <p>Instagram: <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#a259ff' }}>instagram.com</a></p>
              <p>GitHub: <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#a259ff' }}>github.com</a></p>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
