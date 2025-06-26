import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className="bg-base-300 pt-[32px] pb-[50px]">
            <div className='max-w-[1536px] mx-auto'>
                <Navbar></Navbar>
                <div className="pt-8">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default RootLayout;