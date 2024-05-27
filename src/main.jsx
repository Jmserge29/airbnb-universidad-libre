import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/bree-serif";
import "@fontsource/zen-kaku-gothic-new";
import "@fontsource/fugaz-one";
import '@fontsource/fredoka-one';
import '@fontsource-variable/alegreya';
import "./index.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Pay from "./Pages/Pay.jsx";
import Property_ID from "./Pages/Property_ID.jsx";
import Sign_in from "./Pages/Sign-in.jsx";
import Profile from "./Pages/Profile.jsx";
import Sign_up from "./Pages/Sign-up.jsx";
import Admin from "./Pages/Admin.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Users from "./Pages/Admin/Users.jsx";
import Dashboard from "./Pages/Admin/Dashboard.jsx";
import Properties from "./Pages/Admin/Properties.jsx";
import Transactions from "./Pages/Admin/Transactions.jsx";
import Reservations from "./Pages/Admin/Reservations.jsx";
import Report from "./Pages/Admin/Report.jsx";
import User from "./Pages/Profile/User.jsx";
import Client from "./Pages/Client/Client.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route exact path="/" element={<App/>} />
          <Route path="/pay" element={<Pay/>} />
          <Route path="/Sign-in" element={<Sign_in/>} />
          <Route path="/Sign-up" element={<Sign_up/>} />
          <Route path="/property/:id" element={<Property_ID/>} />
          <Route path="/profile" element={<Profile/>} />
          {/* Rutas Administrador */}
          <Route path="/admin/users" element={<Admin children={<Users/>}/>}/>
          <Route path="/admin/dashboard" element={<Admin children={<Dashboard/>}/>}/>
          <Route path="/admin/reservations" element={<Admin children={<Reservations/>}/>}/>
          <Route path="/admin/properties" element={<Admin children={<Properties/>}/>}/>
          <Route path="/admin/transactions" element={<Admin children={<Transactions/>}/>}/>
          <Route path="/admin/report" element={<Admin children={<Report/>}/>}/>
          {/* Rutas Usuario Final */}
          <Route path="/profile/me" element={<User/>} />

          <Route path="/client/me" element={<Client/>} />



          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
