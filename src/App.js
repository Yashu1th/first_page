// import logo from './logo.svg';
import {Space} from "antd";
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import SideMenu from './components/SideMenu';
import './App.css';

function App() {
  return (
    <div className="App" style={{overflowX:"hidden"}}>
      <AppHeader/>
      <Space>
      <SideMenu></SideMenu>
      <AppContent></AppContent>
      </Space>



    </div>
  );
}

export default App;
