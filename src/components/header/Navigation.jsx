import "../../styles/header/navigation.css";
import { useRef, useEffect, useState } from "react";
import NavLink from "./NavLink";
import menu from "../../assets/menu.png";
import worker from "../../workers/introWorkerInstance.js";

function Navigation() {
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);
  const [open, setOpen] = useState(false);
  const openRef = useRef(open);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    const navBar = navRef.current;
    const button = buttonRef.current;
    const overlay = overlayRef.current;

    const handleMessage = (e) => {
      navBar.classList.toggle("open");
      overlay.classList.toggle("open");
      setOpen(e.data);
    };

    const pullMenu = () => {
      const commit = openRef.current ? "continue" : "pause";
      worker.postMessage({ commit });
    };

    const handleNavReset = (e) => {
      if (e.target.id === "nav-overlay") pullMenu();
    };

    button.addEventListener("click", pullMenu);
    window.addEventListener("click", handleNavReset);
    worker.addEventListener("message", handleMessage);

    return () => {
      button.removeEventListener("click", pullMenu);
      window.removeEventListener("click", handleNavReset);
      worker.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <>
      <div id="nav-overlay" ref={overlayRef}></div>
      <button id="menu" ref={buttonRef} aria-label="Menu">
        <img src={menu} alt="Menu.png" />
      </button>
      <nav id="nav-bar" ref={navRef}>
        <NavLink linkName="Home" href="#" is_open={open} />
        <NavLink linkName="Projects" href="#" is_open={open} />
        <NavLink linkName="About" href="#" is_open={open} />
        <NavLink linkName="Contact" href="#" is_open={open} />
      </nav>
    </>
  );
}

export default Navigation;
