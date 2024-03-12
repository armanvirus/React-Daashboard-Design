import React from 'react'
import { Outlet } from "react-router-dom"
import { Navbar, Header } from "../components"
const Dashboard = () => {
    return (
        <div className="dashboard w-f-vh">
            <div>
                <Navbar />
                <div className="dashboard-main">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard