import React, { useEffect, useState, lazy, Suspense } from 'react';

const MobileComponent = lazy(() => import('./mobile.jsx'));
const DesktopComponent = lazy(() => import('./desktop.jsx'));

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 767;
      setIsMobile(isMobileDevice);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {isMobile ? <MobileComponent /> : <DesktopComponent />}
      </Suspense>
    </div>
  );
};

export default App;
