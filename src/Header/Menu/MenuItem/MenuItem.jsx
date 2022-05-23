import "./MenuItem.css"
export default function MenuItem({ onClick, children }) {
  return (
    <li>
      <a onClick={onClick} className="nav-link menu-title">{children}</a>
    </li>
  );
}
