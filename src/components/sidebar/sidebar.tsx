import React from "react";
import './sidebar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAtom,
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { Nav } from "reactstrap";
import SubMenu from "./submenu/submenu";
import MenuItem from "./menu-item/menu-item";

interface SidebarProps {
  isOpen?: boolean,
  toggle?: () => void
}

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      title: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

const SideBar = (props: SidebarProps) => {

  const { isOpen } = props;

  return (
    <nav id="sidebar" className={isOpen ? undefined : 'active'}>
      <div className="sidebar-header">
        <h3>Reactstrap Sidebar</h3>
        <FontAwesomeIcon icon={faAtom} />
      </div>
      <Nav vertical className="list-unstyled components">
        <SubMenu title="Home" icon={faHome} items={submenus[0]} sidebarOpened={isOpen} />
        <MenuItem title="About" icon={faBriefcase} sidebarOpened={isOpen} />
        <SubMenu title="Pages" icon={faCopy} items={submenus[1]} sidebarOpened={isOpen} />
        <MenuItem title="Portfolio" icon={faImage} sidebarOpened={isOpen} />
        <MenuItem title="FAQ" icon={faQuestion} sidebarOpened={isOpen} />
        <MenuItem title="Contact" icon={faPaperPlane} sidebarOpened={isOpen} />
      </Nav>
    </nav>
  );
}

export default SideBar;
