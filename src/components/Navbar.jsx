import React from 'react'
import {Icon} from "../utils"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-header header flex center">
                <img src="/logo.png" alt="" srcset=""/> <span className="site">ARKS UTILS</span>
            </div>
                <section>
                    <ul>
                        <li> <span><Icon name="analytics"/></span> <a href="">Analytics</a></li>
                        <li> <span><Icon name="services"/></span> <a href="">Services</a></li>
                        <li> <span><Icon name="message"/></span> <a href="">Messages</a></li>
                        <li> <span><Icon name="user"/></span> <a href="">Customers</a></li>
                    </ul>
                </section>

                <section>
                    <ul>
                        <li> <span><Icon name="settings"/></span> <a href="">Settings</a></li>
                        <li> <span><Icon name="logout"/></span> <a href="">Logout</a></li>
                    </ul>
                </section>
        
        </div>
    )
}
export default Navbar