// SplashScreen.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, [navigate]);

  return (
    <div style={styles.splashScreen}>
      <img src="/Logo.jpg" alt="Logo" style={styles.logo} />
      <h4>CONTESTIFY</h4>
    </div>
  );
};

const styles = {
  splashScreen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff', // Change this to match your branding
  },
  logo: {
    width: '150px', // Adjust as needed
    height: '150px', // Adjust as needed
  },
};

export default SplashScreen;
