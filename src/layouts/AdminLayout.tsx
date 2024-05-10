import React from "react";
import { FooterBar, SearchBar, SideNav } from "../components/nvabars";
import { Outlet } from "react-router-dom";


class AdminLayout extends React.Component {

    render(): React.ReactNode {
        return (
            <>
                <SideNav />
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                    <SearchBar />
                    <div className="container-fluid py-4 bg-gray-200">
                        <Outlet />

                        <FooterBar />
                    </div>
                </main>
            </>
        );
    }
}

export default AdminLayout;