import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router';
const QuickShiftLogo = ({textColor}) => {
    return (
        <Link to={'/'}>
            <div className='flex items-end'>
                    <img src={logo} className='mb-[2x] h-[48px] w-[37px]' alt="" />
                    <p className={`text-[32px] font-extrabold ${textColor} -ml-4`}>QuickShift</p>
                </div>
        </Link>
    );
};

export default QuickShiftLogo;