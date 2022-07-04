import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import './App.scss';
import NavBar from './Navigation/NavBar';
import SideNav from './Navigation/SideNav';
import AddDevice from './pages/devices/addDevice/addDevice';
import DeviceList from './pages/devices/DeviceList';
import EditDevice from './pages/devices/editDevice/editDevice';
import NoPageFound from './pages/NoPageFound';
import AddUser from "./pages/user/addUser/AddUser";
import EditUser from "./pages/user/editUser/EditUser";
import UsersList from "./pages/user/UsersList";

function App() {
  return (
    <section className="App">
      <NavBar />
      <div className="container-fluid">
        <div className='row'>
          <SideNav />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <Routes>
              <Route path="/" element={<UsersList />} />
              <Route path="/addUser" element={<AddUser />} />
              <Route path="/editUser/:id" element={<EditUser />} />
              {/* devices */}
              <Route path="/devices" element={<DeviceList />} />
              <Route path="/addDevice" element={<AddDevice />} />
              <Route path="/devices/:id" element={<EditDevice />} />

              <Route path="*" element={<NoPageFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </section>
  );
}

export default App;
