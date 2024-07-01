import { Navbar } from "@/components/ui/Navbar"
import Slider from "@/components/ui/Slider"
import { useEffect, useState } from "react"
export const Home = () => {
    const [isNavbarSticky, setIsNavbarSticky] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(currentScrollPosition);

      // Assuming the TopComponent has a fixed height of 100px
      const topComponentHeight = 100;
      setIsNavbarSticky(currentScrollPosition >= topComponentHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
        <div  className={`navbar ${isNavbarSticky ? 'sticky' : ''}`}>
        <Navbar />
        </div>
        <Slider />
    </div>
  )
}
