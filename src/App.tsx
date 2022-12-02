import * as React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./css/output.css";
import PrivateRoutes from "./Page/Admin/PrivateRoutes";
import Projects from "./Page/Admin/Projects";
import UpdateProfile from "./Page/Login/UpdateProfile";
import Home from "./Page/IU/Home";
import List from "./Page/IU/List";
import Actu from "./Page/IU/Actu";
import Login from "./Page/Login/Login";
import Signup from "./Page/Login/Signup";
import Student from "./Page/IU/Student";
import {Transition} from "./Page/start/Transition";
import ForgotPassword from "./Page/Login/ForgotPassword";
import LogStd from "./Page/Login/LogStd";
function App() {
  return (<>
          <BrowserRouter>
              <Routes>
                  <Route element={<PrivateRoutes />}>
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/update-profile" element={<UpdateProfile />} />
                  </Route>
                  <Route path="/" element={<LogStd/>} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/list' element={<List />} />
                  <Route path='/actu' element={<Actu />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path='/student' element={<Student />} />
                  <Route path="/Transition" element={<Transition/>}/>
                  <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
