import "../styles/nav-links.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";

function NavLinks() {
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const navBar = navRef.current;
    const button = buttonRef.current;

    let move_left = true;
    let destination;

    const handleButtonClick = () => {
      destination = move_left ? 16 : -180;

      gsap.to(navBar, {
        right: destination,
        duration: 0.5,
        ease: "power2.out",

        onComplete: () => (move_left = !move_left),
      });
    };

    button.addEventListener("click", handleButtonClick);

    return () => button.removeEventListener("click", handleButtonClick);
  }, []);

  return (
    <>
      <div id="nav-overlay"></div>
      <button id="menu" ref={buttonRef}></button>
      <nav id="mobile-nav" ref={navRef}>
        <a href="#">
          <div className="link-text">Home</div>
          <div className="underline"></div>
        </a>

        <a href="#">
          <div className="link-text">Projects</div>
          <div className="underline"></div>
        </a>

        <a href="#">
          <div className="link-text">About</div>
          <div className="underline"></div>
        </a>
        <a href="#">
          <div className="link-text">Contact</div>
          <div className="underline"></div>
        </a>
      </nav>
    </>
  );
}

export default NavLinks;
