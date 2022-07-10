import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink } from "reactstrap";

const MenuItem = (props: any) => {

  const { title, icon, sidebarOpened } = props;

  const [showDropdown, setshowDropdown] = React.useState<boolean>(false);

  return (
    sidebarOpened ?
      <NavItem>
        <NavLink>
          <FontAwesomeIcon icon={icon} className="mr-2" />
          {" "}
          <span>{title}</span>
        </NavLink>
      </NavItem>
      :
      <Dropdown
        direction="end"
        onMouseEnter={() => setshowDropdown(true)}
        onMouseLeave={() => setshowDropdown(false)}
        isOpen={showDropdown}
        // toggle={() => setshowDropdown(!showDropdown)}
        toggle={() => { }}
        nav
      >
        <DropdownToggle nav>
          <FontAwesomeIcon icon={icon} className="mr-2" />
        </DropdownToggle>
        <DropdownMenu style={{ height: '100%' }}>
          <DropdownItem header style={{ height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <span>{title}</span>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
  );
}

export default MenuItem;