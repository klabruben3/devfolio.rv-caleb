import "../styles/follow-mouse.css";
import { useRef } from "react";
import { useEffect } from "react";

function FollowMouse() {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;

    const handleMouseMove = (e) => {
      box.style.left = e.clientX + "px";
      box.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={boxRef} id="box"></div>;
}

export default FollowMouse;
