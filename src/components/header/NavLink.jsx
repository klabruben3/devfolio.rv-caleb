import "../../styles/header/nav-link.css";

function NavLink({ linkName, href, is_open = false }) {
  return (
    <li className={is_open ? "open" : null}>
      <a href={href} tabIndex={is_open ? 0 : -1} aria-label={linkName}>
        <div>{linkName}</div>
        <div className="underline"></div>
      </a>
    </li>
  );
}

export default NavLink;
