import { Button, Col, Row } from "react-bootstrap";
import Menu from "./Menu";
import MenuItem from "./Menu/MenuItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../index.css";
import "./Header.css";
const Header = ({
  logo,
  menuItems,
  loggedIn,
  loggedUserName,
  onClickLogo,
  onClickLoginButton,
  onClickLogoutButton,
}) => {
  const handleClickLogo = () => {
    if (onClickLogo) onClickLogo();
  };
  return (
    <header className="light_header">
      <div className="container">
        <Row>
          <Col>
            <div className="menu">
              <div className="brand-logo">
                <img
                  src={logo}
                  alt="brand-logo"
                  className="img-fluid lazyload"
                  onClick={handleClickLogo}
                />
              </div>
              {menuItems && (
                <Menu>
                  <>
                    {menuItems.map((item, index) => (
                      <MenuItem key={index} children={item.node} onClick={item.onClick} />
                    ))}
                  </>
                </Menu>
              )}
              <ul className="header-right">
                <li className={""}>
                  <span className={"custom-header-item"}>
                    {loggedIn && loggedUserName}
                  </span>
                </li>

                <li className="user">
                  {loggedIn && (
                    <Button variant="dark" onClick={onClickLogoutButton}>
                      Logout
                    </Button>
                  )}
                  {!loggedIn && (
                    <Button variant="dark" onClick={onClickLoginButton}>
                      Login
                    </Button>
                  )}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
};
export default Header;
