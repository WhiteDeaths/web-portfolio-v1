import styles from './App.module.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import jsLogo from './assets/js.svg';
import cssLogo from './assets/css.svg';
import htmlLogo from './assets/html.svg';
import TextType from './TextType';
import TiltedCard from './TiltedCard';
import Particles from './Particles';
import SpotlightCard from './SpotlightCard';
import Loader from './Loader';
import SectionTabs from './SectionTabs';
import SocialIcons from './SocialIcons';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && <Loader />}
      <SectionTabs />
      <SocialIcons />
      <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflow: 'hidden', background: '#000', filter: loading ? 'blur(2px)' : 'none', pointerEvents: loading ? 'none' : 'auto' }}>
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
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(162, 89, 255, 0.25)" style={{ flex: 1, minWidth: 320, maxWidth: 410 }}>
              <section id="about" className={styles.aboutMe} style={{ background: 'none', boxShadow: 'none', margin: 0, padding: 0 }}>
                <h1>About Me</h1>
                <p>
                  Hi, I'm James Upson, a passionate full stack developer with experience in building modern, interactive web applications as well as accounting software. I love creating user-friendly interfaces as well as developing side projects when I need something to help with my work.
                </p>
                <button className={styles.aboutMeButton}>Learn More</button>
              </section>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(162, 89, 255, 0.25)" style={{ flex: 1, minWidth: 320, maxWidth: 410 }}>
              <div id="projects">
                <h1>Projects</h1>
                <p>Showcase your projects or highlights here.</p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(162, 89, 255, 0.25)" style={{ flex: 1, minWidth: 320, maxWidth: 410 }}>
              <div id="languages">
                <h1>Languages I Know</h1>
                <div className={styles.languages}>
                  <TiltedCard
                    imageSrc={jsLogo}
                    altText="JavaScript"
                    captionText="JavaScript"
                    containerHeight="64px"
                    containerWidth="64px"
                    imageHeight="64px"
                    imageWidth="64px"
                    rotateAmplitude={12}
                    scaleOnHover={1.18}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={false}
                  />
                  <TiltedCard
                    imageSrc={reactLogo}
                    altText="React"
                    captionText="React"
                    containerHeight="64px"
                    containerWidth="64px"
                    imageHeight="56px"
                    imageWidth="56px"
                    rotateAmplitude={12}
                    scaleOnHover={1.18}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={false}
                  />
                  <TiltedCard
                    imageSrc={cssLogo}
                    altText="CSS"
                    captionText="CSS"
                    containerHeight="64px"
                    containerWidth="64px"
                    imageHeight="64px"
                    imageWidth="64px"
                    rotateAmplitude={12}
                    scaleOnHover={1.18}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={false}
                  />
                  <TiltedCard
                    imageSrc={htmlLogo}
                    altText="HTML"
                    captionText="HTML"
                    containerHeight="64px"
                    containerWidth="64px"
                    imageHeight="64px"
                    imageWidth="64px"
                    rotateAmplitude={12}
                    scaleOnHover={1.18}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={false}
                  />
                </div>
              </div>
            </SpotlightCard>
          </div>
          {/* Contact Cards Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', margin: '2.5rem 0' }}>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(162, 89, 255, 0.25)" style={{ minWidth: 320, maxWidth: 410 }}>
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
