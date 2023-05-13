import React, {useEffect, useState} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import FormPage from './pages/FormPage';
import HeaderComponent from "./components/Header/HeaderComponent";
import menuList from "./constants/menuList";
import IMenuItem from "./models/IMenuItem";
import AboutUsPage from "./pages/AboutUsPage";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";

export function App() {
  const location = useLocation();
    const [menuItems, setMenuItems] = useState<IMenuItem[]>([]);

    useEffect(() => {
        setMenuItems(menuList);
    }, [])
  return (
    <>
        <HeaderComponent data-testid="headerComponent" menuItems={menuItems}/>
        <Routes location={location} key={location.key}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutUsPage />}></Route>
            <Route path="/form" element={<FormPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </>
  );
}
