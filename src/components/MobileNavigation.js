import React from 'react';
import { mobileNavigation } from '../constants/navigation'
import { NavLink } from 'react-router-dom';

function MobileNavigation() {
  return (
    <section className='lg:hidden h-14 bg-blue-950 opacity-75 fixed bottom-0 w-full'>
      <div className='flex items-center justify-between h-full text-white'>
        {
          mobileNavigation.map((nav, index) => {
            return (
              <NavLink key={nav.label + "mobilenavigation"} to={nav.href} className={({ isActive }) => `px-3 flex h-full items-center flex-col justify-center ${isActive && "text-orange-600"} `}>
                <div className='text-2xl'>
                  {nav.icon}
                </div>
                <p className='text-sm'>{nav.label}</p>
              </NavLink>
            )
          })
        }
      </div>
    </section>
  );
}

export default MobileNavigation;





