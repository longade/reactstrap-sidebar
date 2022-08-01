import React from "react";
import "./content.scss";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Content = (props: any) => {

  const { sidebarOpen, toggleSidebar } = props;

  const buttonClick = () => {
    toggleSidebar(!sidebarOpen);
  }

  return (
    <div id="content">
      <Navbar expand="lg" color="light" light>
        <div className="container-fluid">
          <Button id="sidebarCollapse" color="dark" onClick={buttonClick}>
            {sidebarOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          </Button>
        </div>
      </Navbar>
      <div style={{ height: 300, border: '1px solid black', padding: 10 }}>
        {"Some content..."}
      </div>
    </div>
  );
}

export default Content;