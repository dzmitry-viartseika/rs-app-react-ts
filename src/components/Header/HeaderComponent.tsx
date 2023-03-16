import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import menuList from '../../constants/menuList';
import IMenuItem from '../../models/IMenuItem';
import '../Header/headerComponent.css';

class HeaderComponent extends Component {

    state = {
        menuItems: menuList,
    }

    render() {
        const { menuItems } = this.state;
        return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="h-6 mr-3 sm:h-9"
                         alt="Test Logo"/>
                    <span
                        className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Test Logo</span>
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {menuItems.map((item: IMenuItem) => {
                            return (
                                <li key={item.id}>
                                    <Link to={item.route}
                                       className="block py-2 pl-3 pr-4 text-white bg-black-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                       aria-current="page">{item.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
    }
}

export default HeaderComponent;