import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='text-center bg-slate-900 bg-opacity-40 text-neutral-400 py-4'>
      <div className='flex items-center justify-center gap-4'>
      <Link to="">About</Link>
      <Link to="">Contact</Link>
      <Link onClick="" to="/">Terms of Service</Link>
      </div>
      <p className='text-sm'>Created by Jameka Haggins</p>
    </footer>
  )
}

export default Footer;
