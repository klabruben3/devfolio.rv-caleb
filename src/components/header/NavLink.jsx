import "../../styles/header/nav-link.css";

function NavLink({ linkName, href, is_open = false }) {
  return (
    <a
      href={href}
      tabIndex={is_open ? 0 : -1}
      className={is_open ? "open" : null}
    >
      <div>{linkName}</div>
      <div className="underline"></div>
    </a>
  );
}

export default NavLink;
