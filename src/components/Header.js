import React from 'react'
import mplogo from '../assets/mplogo.svg'
import { NavLink } from 'react-router-dom'
import people from '../assets/people.png'
import { IoSearchOutline } from 'react-icons/io5'

function Header() {

  const navigation = [
    {
      label : "TV Shows",
      href : 'tv'
    },
    {
      label : "Movies",
      href : "movie"
    }
  ]
  return (
    <header className='fixed top-0 w-full h-16 bg-blue-950 bg-opacity-75'>
      <div className='container mx-auto px-3 flex items-center h-full'>
        <div>
          <img 
            src={mplogo}
            alt='logo'
            width={186}
          />
        </div>
        <nav className='hidden lg:flex items-center gap-1 ml-5 text-neutral-300'>
          {
            navigation.map((nav, index) => {
              return(
                <div>
                  <NavLink key={nav.label} to={nav.href} className={({isActive}) => `px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                    {nav.label}
                  </NavLink>
                </div>
              )
            })
          }
        </nav>
        <div className='ml-auto flex items-center gap-5'>
          <form>
            <input
              type='text'
              placeholder='Search...'
              className='text-white bg-transparent px-4 py-1 rounded-full border-none outline-none hover:outline-orange-300 transition-all'
            />
          </form>
          <div className='text-2xl text-white'>
            <IoSearchOutline />
          </div>
          <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
            <img 
              src={people}
              className='w-full h-full'
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;