import React from "react";
import './sidebar.scss';
import SidebarOpened from "./opened/sidebar-opened";
import SidebarCollapsed from "./collapsed/sidebar-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";

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
      {isOpen ?
        <SidebarOpened submenus={submenus} />
        :
        <SidebarCollapsed submenus={submenus} />
      }
    </nav>
  );
}

export default SideBar;
