import "../styles/project-card.css";
import { useRef, useEffect, useState } from "react";

function ProjectCard({ title, description, src, type, href }) {
  const videoRef = useRef(null);
  const [show, setShow] = useState(window.innerWidth < 900);
  let media;
  let onMouseEnter;
  let onMouseLeave;

  const describe = !show ? <p>{description}</p> : null;

  // Handles if media is video or image
  if (type == "video") {
    media = (
      <video className="project-video" src={src} ref={videoRef} loop muted />
    );
    onMouseEnter = () => videoRef.current.play();
    onMouseLeave = () => videoRef.current.pause();
  } else {
    media = <img src={src} className="project-image" alt="Project Thumbnail" />;
  }

  // Handles whether to show the description or not
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const handleMediaQuery = (e) => setShow(e.matches);
    mediaQuery.addEventListener("change", handleMediaQuery);

    return () => mediaQuery.removeEventListener("change", handleMediaQuery);
  }, []);

  return (
    <>
      <a
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        href={href}
        className="project-card"
        target="_blank"
      >
        {media}
        <div className="project-info">
          <h3>{title}</h3>
          {describe}
        </div>
      </a>
    </>
  );
}

export default ProjectCard;
