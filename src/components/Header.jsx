import React,{useState} from 'react'
import { Icon } from "../utils"

const Header = () => {
    const [theme,setTheme] = useState("light");
    const toggleMode = ()=>{
        theme === 'light' ? setTheme('dark') : setTheme('light')
        theme === 'light' ? localStorage.setItem("theme","light") : localStorage.setItem("theme","dark")
    }
    return (
        <div className="navbar-header flex-center-space w-100">
            <section className="flex center around sec-a">
                <div className="current-page"><h2>Analytics</h2></div>
                <div className="data-picker"> <input type="date" name="date" id="" /> </div>
            </section>
            <section className="flex sec-b">
                <div className="theme-switcher flex center">
                    <Icon name="light" />
                    <div onClick={()=>{toggleMode()}}> 
                    <span className={`switcher ${theme}`}></span> </div>
                    <Icon name="dark" />
                </div>
                <div className="user flex center">
                    <img src="/arman.png" alt="" />
                    <p>Arman Grema</p>
                </div>
            </section>
        </div>
    )
}

export default Header