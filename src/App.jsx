import styles from './App.module.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import jsLogo from './assets/js.svg';
import cssLogo from './assets/css.svg';
import htmlLogo from './assets/html.svg';

function App() {
  return (
    <div className={styles.darkVeilBackground}>
      <div className={styles.darkVeilOverlay}></div>
      <div className={styles.container}>
        <section className={styles.aboutMe}>
          <h1>About Me</h1>
          <p>
            Hi, I'm James Upson, a passionate full stack developer with experience in building modern, interactive web applications as well as accounting software. I love creating user-friendly interfaces as well as developing side projects when I need something to help with my work.
          </p>
        </section>
        <section>
          <h2>Languages I Know</h2>
          <div className={styles.languages}>
            <div className={styles.languageIcon} title="JavaScript">
              <img src={jsLogo} alt="JavaScript" width="40" height="40" />
            </div>
            <div className={styles.languageIcon} title="React">
              <img src={reactLogo} alt="React" width="40" height="40" />
            </div>
            <div className={styles.languageIcon} title="CSS">
              <img src={cssLogo} alt="CSS" width="40" height="40" />
            </div>
            <div className={styles.languageIcon} title="HTML">
              <img src={htmlLogo} alt="HTML" width="40" height="40" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
