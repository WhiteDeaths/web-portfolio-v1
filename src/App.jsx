import styles from './App.module.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import jsLogo from './assets/js.svg';
import cssLogo from './assets/css.svg';
import htmlLogo from './assets/html.svg';
import TextType from './TextType';
import TechStackIcon from './TechStackIcon';
import Particles from './Particles';
import SpotlightCard from './SpotlightCard';
import Loader from './Loader';
import SectionTabs from './SectionTabs';
import SocialIcons from './SocialIcons';
import AnimatedBackground from './AnimatedBackground';
import WelcomeScreen from './WelcomeScreen';
import { useState, useEffect } from 'react';

const sectionTabs = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'experience', label: 'Experience' },
  { id: 'languages', label: 'Languages' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    if (!showWelcome) return;
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, [showWelcome]);
  return (
    <>
      {showWelcome && <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />}
      <AnimatedBackground />
      <SectionTabs tabs={sectionTabs} />
      <SocialIcons />
      <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflow: 'hidden', background: 'transparent', filter: showWelcome ? 'blur(2px)' : 'none', pointerEvents: showWelcome ? 'none' : 'auto' }}>
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
                  <TechStackIcon TechStackIcon={jsLogo} Language="JavaScript" />
                  <TechStackIcon TechStackIcon={reactLogo} Language="React" />
                  <TechStackIcon TechStackIcon={cssLogo} Language="CSS" />
                  <TechStackIcon TechStackIcon={htmlLogo} Language="HTML" />
                  <TechStackIcon TechStackIcon={require('./assets/typescript.svg')} Language="TypeScript" />
                  <TechStackIcon TechStackIcon={require('./assets/python.svg')} Language="Python" />
                  <TechStackIcon TechStackIcon={require('./assets/nodejs.svg')} Language="Node.js" />
                  <TechStackIcon TechStackIcon={require('./assets/c.svg')} Language="C" />
                  <TechStackIcon TechStackIcon={require('./assets/cpp.svg')} Language="C++" />
                  <TechStackIcon TechStackIcon={require('./assets/java.svg')} Language="Java" />
                  <TechStackIcon TechStackIcon={require('./assets/go.svg')} Language="Go" />
                  <TechStackIcon TechStackIcon={require('./assets/php.svg')} Language="PHP" />
                  <TechStackIcon TechStackIcon={require('./assets/ruby.svg')} Language="Ruby" />
                  <TechStackIcon TechStackIcon={require('./assets/swift.svg')} Language="Swift" />
                </div>
              </div>
            </SpotlightCard>
          </div>
          {/* Projects, Certificates, Experience SpotlightCards */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(162, 89, 255, 0.25)" style={{ minWidth: 320, maxWidth: 410, width: '100%' }}>
              <div id="projects">
                <h1 style={{ textAlign: 'center', width: '100%' }}>Projects</h1>
                <p>Showcase your projects or highlights here.</p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(162, 89, 255, 0.25)" style={{ minWidth: 320, maxWidth: 410, width: '100%' }}>
              <div id="certificates">
                <h1 style={{ textAlign: 'center', width: '100%' }}>Certificates</h1>
                <p>Showcase your certificates here.</p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(162, 89, 255, 0.25)" style={{ minWidth: 320, maxWidth: 410, width: '100%' }}>
              <div id="experience">
                <h1 style={{ textAlign: 'center', width: '100%' }}>Years of Experience</h1>
                <p>Showcase your experience here.</p>
              </div>
            </SpotlightCard>
          </div>
          {/* Contact Cards Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', margin: '2.5rem 0' }}>
            <SpotlightCard id="contact" className="custom-spotlight-card" spotlightColor="rgba(162, 89, 255, 0.25)" style={{ minWidth: 320, maxWidth: 410 }}>
              <h2>Contact Me</h2>
              <p>Email: <a href="mailto:your@email.com" style={{ color: '#a259ff' }}>your@email.com</a></p>
              <p>LinkedIn: <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#a259ff' }}>linkedin.com</a></p>
            </SpotlightCard>
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
