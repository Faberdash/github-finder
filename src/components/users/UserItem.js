import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const UserItem = ({ userInfo: { login, avatar_url: avatar } }) => {

        return (
            <div className="card text-center">
                <img 
                    src={avatar} 
                    alt="User Avatar" 
                    className="round-img"
                    style={{width: "60px"}} />

                <h3>{login}</h3>

                <div>
                    <Link to={`/users/${login}`} className="btn btn-dark btn-sm my-1">
                        More
                    </Link>
                </div>
            </div>
        )
}

UserItem.propTypes = {
    userInfo: PropTypes.object.isRequired,
}

export default UserItem
