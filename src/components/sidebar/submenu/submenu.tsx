import React from "react";
import './submenu.scss';
import classNames from "classnames";
import { Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubMenu = (props: any) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const toggle = () => setCollapsed(!collapsed);
  const { icon, title, items, sidebarOpened } = props;

  const [showDropdown, setshowDropdown] = React.useState<boolean>(false);

  return (
    <div>
      {sidebarOpened ?
        <>
          <NavItem
            onClick={toggle}
            className={classNames({ "menu-open": !collapsed })}
          >
            <NavLink className="dropdown-toggle">
              <FontAwesomeIcon icon={icon} className="mr-2" />
              <span>{title}</span>
            </NavLink>
          </NavItem>
          <Collapse
            isOpen={!collapsed}
            navbar
            className={classNames("items-menu", { "mb-1": !collapsed })}
          >
            {items.map((item: any, index: number) => (
              <NavItem key={index} className="pl-4">
                <NavLink>
                  <span>{item.title}</span>
                </NavLink>
              </NavItem>
            ))}
          </Collapse>
        </>
        :
        <>
          <Dropdown
            direction="end"
            onMouseEnter={() => setshowDropdown(true)}
            onMouseLeave={() => setshowDropdown(false)}
            isOpen={showDropdown}
            // toggle={() => setshowDropdown(!showDropdown)}
            toggle={() => {}}
            nav
          >
            <DropdownToggle caret nav>
              <FontAwesomeIcon icon={icon} className="mr-2" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
                {title}
              </DropdownItem>
              {items.map((item: any, index: number) => (
                <DropdownItem key={index}>
                  <NavLink>
                    <span>{item.title}</span>
                  </NavLink>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </>
      }
    </div>
  );
};

export default SubMenu;