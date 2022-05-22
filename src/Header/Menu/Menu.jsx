import PropTypes from "prop-types";
const Menu = ({ children }) => {
  return (
    <nav>
      <div className="main-navbar">
        <div id="mainnav">
          <div className="toggle-nav">
            <i className="fa fa-bars sidebar-bar"></i>
          </div>
          <div className="menu-overlay"></div>
          <ul className="nav-menu">
            <li className="back-btn">
              <div className="mobile-back text-right">
                <span>Back</span>
                <i aria-hidden="true" className="fa fa-angle-right pl-2"></i>
              </div>
            </li>
            {children}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Menu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
export default Menu;
