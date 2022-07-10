import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar/sidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Button } from 'reactstrap';
// import { faAlignLeft } from '@fortawesome/free-solid-svg-icons/faAlignLeft';
import Content from './components/content/content';

function App() {

  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="App wrapper">
      <SideBar isOpen={sidebarOpen} />
      <Content sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
