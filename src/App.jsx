import styles from './App.module.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import jsLogo from './assets/js.svg';
import cssLogo from './assets/css.svg';
import htmlLogo from './assets/html.svg';
import TextType from './TextType';
import MagicBento from './MagicBento';
import TiltedCard from './TiltedCard';

function App() {
  return (
    <div className={styles.darkVeilBackground}>
      <div className={styles.darkVeilOverlay}></div>
      <div className={styles.container}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 className={styles.aboutMe} style={{ background: 'none', boxShadow: 'none', marginBottom: 0, padding: 0 }}>
            <TextType
              text={["Welcome to my portfolio"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
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
        <div style={{ marginTop: '2.5rem' }}>
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>
        <div style={{ margin: '2.5rem auto', display: 'flex', justifyContent: 'center' }}>
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Kendrick Lamar - GNX"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                Kendrick Lamar - GNX
              </p>
            }
          />
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
              imageHeight="64px"
              imageWidth="64px"
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
