import React from 'react'
import { FaBars } from 'react-icons/fa'
import {links, SocialBar} from '../links'
import {useGlobalContext} from '../context'

const Navbar = () => {

    const {openSidebar, closeSidebar} = useGlobalContext();

  return (
    <nav className='nav'>
        <header className='nav-header'>
            <div className='nav-brand'>
                <h4>Navbar React</h4>
            </div>
            <button onClick={openSidebar} className='btn nav-toggler'>
                <FaBars className='nav-icon' />
            </button>
        </header>
        <div className='links-container'>
            <ul className='nav-links'>
                {links.map((link) => {
                    const {id, url, text} = link
                    return (
                        <li key={link.id} onClick={closeSidebar}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    )
                }
                )}
            </ul>
        </div>
        <div className='social-links'>
            <SocialBar />
        </div>
    </nav>
  )
}

export default Navbar
