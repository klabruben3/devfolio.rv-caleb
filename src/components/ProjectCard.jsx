import "../styles/project-card.css";
import { useRef } from "react";

function ProjectCard({ title, description, src, type, href }) {
  const videoRef = useRef(null);
  let media;
  let onMouseEnter;
  let onMouseLeave;
  if (type == "video") {
    media = (
      <video className="project-video" src={src} ref={videoRef} loop muted />
    );
    onMouseEnter = () => videoRef.current.play();
    onMouseLeave = () => videoRef.current.pause();
  } else {
    media = <img src={src} className="project-image" alt="Project Thumbnail" />;
  }

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
          <p>{description}</p>
        </div>
      </a>
    </>
  );
}

export default ProjectCard;
