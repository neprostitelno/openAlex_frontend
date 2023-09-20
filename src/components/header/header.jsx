import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {


    return <div className="header">
        <div className="header__logo">
            <img className="header__img" alt=""
                 src="https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F2520693015-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FpHVuV3Ib5KXeBKft4Kcl%252Ficon%252FogQFSOcLuYxWvYBhmDaU%252Fopenalex%2520logo%2520twitter.jpg%3Falt%3Dmedia%26token%3D5136a792-47d6-4d18-96eb-2012b55844d0"
                 height="auto" decoding="async"/>
            <div className="header__title">
                OpenAlex
            </div>
        </div>
        <nav className="header__navbar navbar">
            <ul className="navbar__item">
                <li className="navbar__link"><NavLink to="/works">Works</NavLink></li>
                <li className="navbar__link"><NavLink to="/authors">Authors</NavLink></li>
                <li className="navbar__link"><NavLink to="/sources">Sources</NavLink></li>
                <li className="navbar__link"><NavLink to="/institutions">Institutions</NavLink></li>
                <li className="navbar__link"><NavLink to="/concepts">Concepts</NavLink></li>
                <li className="navbar__link"><NavLink to="/publishers">Publishers</NavLink></li>
                <li className="navbar__link"><NavLink to="/funders">Funders</NavLink></li>
                <li className="navbar__link"><NavLink to="/geo">Geo</NavLink></li>
            </ul>
        </nav>
        <div className="header__search">
            search
        </div>
    </div>
}
export default Header;