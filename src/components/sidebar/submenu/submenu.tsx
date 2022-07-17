import React from "react";
import './submenu.scss';
import classNames from "classnames";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubMenu = (props: any) => {

  const { icon, title, items, sidebarOpened } = props;

  const divRef = React.createRef<HTMLDivElement>();
  const [showDropdown, setshowDropdown] = React.useState<boolean>(false);

  React.useEffect(() => {
    setshowDropdown(false);
  }, [sidebarOpened])

  const dropdownDir = sidebarOpened ? "down" : "end";

  const onMouseEnter = () => {
    if (sidebarOpened) {
      return;
    }
    setshowDropdown(true)
  }

  const onMouseLeave = () => {
    if (sidebarOpened) {
      return;
    }
    setshowDropdown(false)
  }

  const toggleDropdown = (event: any) => {
    if (!sidebarOpened || (showDropdown && (event.target === divRef.current || !divRef.current?.contains(event.target)))) {
      return;
    }
    setshowDropdown(!showDropdown);
  }

  return (
    <div ref={divRef}>
      <Dropdown
        direction={dropdownDir}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        isOpen={showDropdown}
        toggle={toggleDropdown}
        nav
      >
        <DropdownToggle caret nav>
          <FontAwesomeIcon icon={icon} className="mr-2" />
          {sidebarOpened &&
            <>
              {" "}
              <span>{title}</span>
            </>
          }
        </DropdownToggle>
        <DropdownMenu className={classNames({ "dropdown-menu-custom": sidebarOpened })}>
          {!sidebarOpened &&
            <DropdownItem header>
              <span>{title}</span>
            </DropdownItem>
          }
          {items.map((item: any, index: number) => (
            <DropdownItem key={index} toggle={false}>
              <NavLink>
                <span>{item.title}</span>
              </NavLink>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default SubMenu;