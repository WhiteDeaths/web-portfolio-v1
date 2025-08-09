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

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflow: 'hidden', background: '#000' }}>
      {/* Particles background at the top */}
e typing affect       <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
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
        <section className={styles.aboutMe}>
          <h1>About Me</h1>
          <p>
            Hi, I'm James Upson, a passionate full stack developer with experience in building modern, interactive web applications as well as accounting software. I love creating user-friendly interfaces as well as developing side projects when I need something to help with my work.
          </p>
          <button className={styles.aboutMeButton}>Learn More</button>
        </section>
        {/* Spotlight Cards Row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch', gap: '24px', margin: '2.5rem 0' }}>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h2>Project One</h2>
            <p>Showcase your first project or highlight here.</p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h2>Project Two</h2>
            <p>Showcase your second project or highlight here.</p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h2>Project Three</h2>
            <p>Showcase your third project or highlight here.</p>
          </SpotlightCard>
        </div>
                <section>
          <div className={styles.languagesTitle}>Languages I Know</div>
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
        </section>
      </div>
    </div>
  );
}

export default App;
