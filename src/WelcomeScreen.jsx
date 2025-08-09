import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Globe, User } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 260);
    return () => clearInterval(timer);
  }, [text]);
  return (
    <span style={{ display: 'inline-block' }}>
      {displayText}
      <span className="welcome-typewriter-cursor">|</span>
    </span>
  );
};

const BackgroundEffect = () => (
  <div className="welcome-bg-root">
    <div className="welcome-bg-blur1" />
    <div className="welcome-bg-blur2" />
  </div>
);

const IconButton = ({ Icon }) => (
  <div className="welcome-icon-btn">
    <div className="welcome-icon-btn-bg" />
    <div className="welcome-icon-btn-inner">
      <Icon size={32} color="#fff" />
    </div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: false });
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 4000);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: 'blur(10px)',
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };
  const childVariants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="welcome-fixed-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />
          <div className="welcome-center">
            <div className="welcome-content">
              {/* Icons */}
              <motion.div className="welcome-icons-row" variants={childVariants}>
                {[Code2, User, Github].map((Icon, index) => (
                  <div key={index} data-aos="fade-down" data-aos-delay={index * 200}>
                    <IconButton Icon={Icon} />
                  </div>
                ))}
              </motion.div>
              {/* Welcome Text */}
              <motion.div className="welcome-title" variants={childVariants}>
                <h1>
                  <div className="welcome-title-row">
                    <span data-aos="fade-right" data-aos-delay="200" className="welcome-title-gradient">Welcome</span>{' '}
                    <span data-aos="fade-right" data-aos-delay="400" className="welcome-title-gradient">To</span>{' '}
                    <span data-aos="fade-right" data-aos-delay="600" className="welcome-title-gradient">My</span>
                  </div>
                  <div className="welcome-title-row">
                    <span data-aos="fade-up" data-aos-delay="800" className="welcome-title-gradient2">Portfolio</span>{' '}
                    <span data-aos="fade-up" data-aos-delay="1000" className="welcome-title-gradient2">Website</span>
                  </div>
                </h1>
              </motion.div>
              {/* Website Link */}
              <motion.div className="welcome-link-row" variants={childVariants} data-aos="fade-up" data-aos-delay="1200">
                <a
                  href="https://www.eki.my.id"
                  className="welcome-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="welcome-link-bg" />
                  <div className="welcome-link-inner">
                    <Globe size={20} color="#6366f1" />
                    <span className="welcome-link-gradient">
                      <TypewriterEffect text="www.eki.my.id" />
                    </span>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
