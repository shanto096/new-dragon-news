import moment from 'moment/moment';
import React from 'react';
import logo from '../../../assets/assets/logo.png'


const Header = () => {
    return (
        <div className='text-center'>
            <div className='flex justify-center'>
            < img src={logo} alt="" />
            </div>
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format('MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;