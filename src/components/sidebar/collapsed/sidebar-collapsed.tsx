import React from "react";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { Nav } from "reactstrap";
import SubMenu from "../submenu/submenu";
import CustomNavItem from "./custom-nav-item/custom-nav-item";

const SidebarCollapsed = (props: any) => {

  const { submenus } = props;

  return (
    <Nav vertical className="list-unstyled components">
      <SubMenu title="Home" icon={faHome} items={submenus[0]} sidebarOpened={false} />
      <CustomNavItem title={"About"} icon={faBriefcase} />
      <SubMenu title="Pages" icon={faCopy} items={submenus[1]} sidebarOpened={false} />
      <CustomNavItem title={"Portfolio"} icon={faImage} />
      <CustomNavItem title={"FAQ"} icon={faQuestion} />
      <CustomNavItem title={"Contact"} icon={faPaperPlane} />
    </Nav>
  );
}

export default SidebarCollapsed;