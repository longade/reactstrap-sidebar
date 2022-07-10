import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, NavItem, NavLink } from "reactstrap";
import SubMenu from "../submenu/submenu";

const SidebarOpened = (props: any) => {

  const { submenus } = props;

  return (
    <Nav vertical className="list-unstyled components">
      <SubMenu title="Home" icon={faHome} items={submenus[0]} sidebarOpened={true} />
      <NavItem id={"nav-about"}>
        <NavLink>
          <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
          <span>About</span>
        </NavLink>
      </NavItem>
      <SubMenu title="Pages" icon={faCopy} items={submenus[1]} sidebarOpened={true} />
      <NavItem>
        <NavLink>
          <FontAwesomeIcon icon={faImage} className="mr-2" />
          <span>Portfolio</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <FontAwesomeIcon icon={faQuestion} className="mr-2" />
          <span>FAQ</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
          <span>Contact</span>
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default SidebarOpened;
