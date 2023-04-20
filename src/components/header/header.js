import { Fragment } from 'react'
import { Link } from "react-router-dom";

import UserIcon from './user.svg'
import BriefCase from './briefcase.svg'

import '../../css/index.css'

const Header = () => {
    return (
        <Fragment>
            <header className="header">
                <div className="header__inner">
                    <Link to={'/'} data-test-id="header-logo" href="./index.html" className="header__logo">
                        Travel App
                    </Link>
                    <nav data-test-id="header-nav" className="header__nav">
                        <ul className="nav-header__list">
                            <li className="nav-header__item" title="Bookings">
                                <Link to={"/bookings"}
                                    data-test-id="header-bookings-link"
                                    className="nav-header__inner"
                                >
                                    <span className="visually-hidden">Bookings</span>
                                    <img src={BriefCase} alt=" icon" />
                                </Link>
                            </li>
                            <li className="nav-header__item" title="Profile">
                                <div
                                    data-test-id="header-profile-nav"
                                    className="nav-header__inner profile-nav"
                                    tabIndex="0"
                                >
                                    <span className="visually-hidden">Profile</span>
                                    <img src={UserIcon} alt="profile icon" />
                                    <ul
                                        data-test-id="header-profile-nav-list"
                                        className="profile-nav__list"
                                    >
                                        <li
                                            data-test-id="header-profile-nav-username"
                                            className="profile-nav__item profile-nav__username"
                                        >
                                            John Doe
                                        </li>
                                        <li className="profile-nav__item">
                                            <Link
                                                to='/sign-in'
                                                data-test-id="header-profile-nav-sign-out"
                                                href="./sign-in.html"
                                                className="profile-nav__sign-out button"
                                            >
                                                Sign Out
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </Fragment>
    )
}

export default Header