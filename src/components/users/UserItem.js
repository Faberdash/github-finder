import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({userInfo: {login, avatar_url: avatar, html_url: url}}) => {

        return (
            <div className="card text-center">
                <img 
                    src={avatar} 
                    alt="User Avatar" 
                    className="round-img"
                    style={{width: "60px"}} />

                <h3>{login}</h3>

                <div>
                    <a href={url} className="btn btn-dark btn-sm my-1">
                        More
                    </a>
                </div>
            </div>
        )
}

UserItem.propTypes = {
    userInfo: PropTypes.object.isRequired,
}

export default UserItem
