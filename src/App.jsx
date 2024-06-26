import './App.css'
import { BrowserRouter, Routes, useLocation, createBrowserRouter, Route, useNavigate  } from "react-router-dom";
import NavBar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Work from './components/work'
import Contact from './components/contact'
import Landing from './components/landing';
import NotFound from './components/notFound';
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// const pages = ['/about', '/work', '/contact', '/']; // Define the pages in sequence


const routeVariants = {
    initial: {
      y: "100%",
      opacity: 1,
    },
    enter: {
      y: 0,
      transition: {
        type: "",
        mass: 0.4,
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      position: "fixed",
      top: 0,
      left: 0,
  },
  };

  const childVariants = {
    initial: {
      opacity: 0,
      y: "-50px",
    },
    final: {
      opacity: 1,
      y: "0px",
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
  };  

  const imageVariants = {
    initial: {
      opacity: 0,
      y: "500px",
    },
    final: {
      y: "0px",
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2,
      },
    },
  };


  // const debounce = (func, wait) => {
  //   let timeout;
  //   return (...args) => {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => func(...args), wait);
  //   };
  // };

function App() {
    const [showLanding, setShowLanding] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    // const routes = ['/', '/about', '/work', '/contact'];

    const handleLandingComplete = () => {
      setShowLanding(false);
    };

     // Wheel event handler with debounce
    //  const handleWheel = debounce((event) => {
    //   const currentIndex = routes.indexOf(location.pathname);
    //   if (event.deltaY > 0) {
    //     // Scrolling down
    //     const nextIndex = (currentIndex + 1) % routes.length;
    //     navigate(routes[nextIndex]);
    //   } else {
    //     // Scrolling up
    //     const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
    //     navigate(routes[prevIndex]);
    //   }
    // }, 70);
  
    // const handleTouchMove = debounce((event) => {
    //   // Handle touch move event for navigation
    //   const currentIndex = routes.indexOf(location.pathname);
    //   const touch = event.touches[0];
    //   if (touch.clientY > 0) {
    //     // Scrolling down
    //     const nextIndex = (currentIndex + 1) % routes.length;
    //     navigate(routes[nextIndex]);
    //   } else {
    //     // Scrolling up
    //     const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
    //     navigate(routes[prevIndex]);
    //   }
    // }, 70);
  
    // useEffect(() => {
    //   const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
    //   if (isTouchDevice) {
    //     window.addEventListener('touchmove', handleTouchMove);
    //   } else {
    //     window.addEventListener('wheel', handleWheel);
    //   }
  
    //   return () => {
    //     if (isTouchDevice) {
    //       window.removeEventListener('touchmove', handleTouchMove);
    //     } else {
    //       window.removeEventListener('wheel', handleWheel);
    //     }
    //   };
    // }, [location]);

    return (
      <>
        <AnimatePresence>
          {showLanding && <Landing onComplete={handleLandingComplete}/>}
        </AnimatePresence>
      { (
        <>
          <AnimatePresence initial="false">
            <NavBar />
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home routeVariants={routeVariants} childVariants={childVariants} imageVariants={imageVariants}/>} />
              <Route path='/about' element={<About routeVariants={routeVariants} childVariants={childVariants} imageVariants={imageVariants}/>} />
              <Route path='/work' element={<Work routeVariants={routeVariants} childVariants={childVariants}/>} />
              <Route path='/contact' element={<Contact routeVariants={routeVariants} childVariants={childVariants} imageVariants={imageVariants}/>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
    );
}

export default App
