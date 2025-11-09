import "../../styles/header/navigation.css";
import { useRef, useEffect, useState } from "react";
import NavLink from "./NavLink";
import menu from "../../assets/menu.png";

function Navigation() {
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const navBar = navRef.current;
    const button = buttonRef.current;
    const overlay = overlayRef.current;

    const pullMenu = () => {
      navBar.classList.toggle("open");
      overlay.classList.toggle("open");
      setOpen(!open);
    };

    const handleNavReset = (e) => {
      if (e.target.id === "nav-overlay") pullMenu();
    };

    button.addEventListener("click", pullMenu);
    window.addEventListener("click", handleNavReset);

    return () => {
      button.removeEventListener("click", pullMenu);
      window.removeEventListener("click", handleNavReset);
    };
  }, [open]);

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
