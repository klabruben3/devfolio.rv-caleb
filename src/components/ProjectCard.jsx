import "../styles/project-card.css";
import { useRef, useEffect, useState } from "react";

function ProjectCard({ title, description, src, type, href }) {
  const [show, setShow] = useState(window.innerWidth < 1100);
  const linkRef = useRef(null);
  const videoRef = useRef(undefined);

  // Handles whether to show the description or not
  const describe = !show ? <h6>{description}</h6> : null;
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1100px)");
    const handleMediaQuery = (e) => setShow(e.matches);
    mediaQuery.addEventListener("change", handleMediaQuery);

    return () => mediaQuery.removeEventListener("change", handleMediaQuery);
  }, []);

  useEffect(() => {
    const link = linkRef.current;
    if (type === "video") {
      const video = videoRef.current;
      const videoPlay = () => video.play();
      const videoPause = () => video.pause();

      link.addEventListener("mouseenter", videoPause);
      link.addEventListener("mouseleave", videoPlay);
      link.addEventListener("focusin", videoPause);
      link.addEventListener("focusout", videoPlay);
      link.addEventListener("touchstart", videoPause);
      link.addEventListener("touchend", videoPlay);

      return () => {
        link.removeEventListener("mouseenter", videoPause);
        link.removeEventListener("mouseleave", videoPlay);
        link.removeEventListener("focusin", videoPause);
        link.removeEventListener("focusout", videoPlay);
        link.removeEventListener("touchstart", videoPause);
        link.removeEventListener("touchend", videoPlay);
      };
    } else if (type === "image") {
      const toggleScale = () => link.classList.toggle("active");

      link.addEventListener("mouseenter", toggleScale);
      link.addEventListener("mouseleave", toggleScale);
      link.addEventListener("touchstart", toggleScale);
      link.addEventListener("touchend", toggleScale);

      return () => {
        link.removeEventListener("mouseenter", toggleScale);
        link.removeEventListener("mouseleave", toggleScale);
        link.removeEventListener("touchstart", toggleScale);
        link.removeEventListener("touchend", toggleScale);
      };
    }
  }, []);

  return (
    <>
      <a
        ref={linkRef}
        href={href}
        className={`project ${type === "video" ? "video" : "image"}`}
        target="_blank"
        style={{ backgroundImage: `url(${src})` }}
        aria-label={title}
      >
        {type === "video" && (
          <video
            ref={videoRef}
            className="project-thumbnail"
            src={src}
            autoPlay
            loop
            muted
          />
        )}
        <div className="project-info">
          <h3>{title}</h3>
          {describe}
        </div>
      </a>
    </>
  );
}

export default ProjectCard;
