import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub } from 'react-icons/bs'
import PropTypes from 'prop-types'

const Navbar = ({title}) => {

        return (
            <nav className="navbar bg-primary"> 
               <h2>
                    <BsGithub /> {title}
               </h2>
               <ul>
                   <li>
                       <Link to='/'>Home</Link>
                   </li>
                   <li>
                       <Link to='/about'>About</Link>
                   </li>
               </ul> 
            </nav>
        )
}

Navbar.defaultProps = {
    title: "GitHub Finder"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar
