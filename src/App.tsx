import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/Header/HeaderComponent';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import FormPage from "./pages/FormPage";
import './assets/css/App/App.css';
import IMenuItem from "./models/IMenuItem";
import menuList from './constants/menuList'

function App() {
    const [menuItems, setMenuItems] = useState<IMenuItem[]>([]);

    useEffect(() => {
        setMenuItems(menuList);
    }, [])


  return (
    <div className="app">
        <BrowserRouter>
            <HeaderComponent data-testid="headerComponent" menuItems={menuItems}/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
