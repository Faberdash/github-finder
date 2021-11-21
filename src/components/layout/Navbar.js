import React, { Component } from 'react'
import { BsGithub } from 'react-icons/bs'
import PropTypes from 'prop-types'

class Navbar extends Component {

    static defaultProps = {
        title: "GitHub Finder"
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className="navbar bg-primary"> 
               <h2>
                    <BsGithub /> {this.props.title}
               </h2> 
            </nav>
        )
    }
}

export default Navbar
