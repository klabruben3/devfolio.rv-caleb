import "../styles/nav-link.css";

function NavLink({ linkName, src }) {
  return (
    <a href={src}>
      <div className="link-text">{linkName}</div>
      <div className="underline"></div>
    </a>
  );
}

export default NavLink;
