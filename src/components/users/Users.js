import React from 'react'
import PropTypes from 'prop-types'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

const Users = ({ users, loading }) => {

    if(loading) {
        return <Spinner />
    } else {
        return <div style={usersGridStyle}>
                    {users.map((user) => {
                            return <UserItem key={user.id} userInfo={user} />
                        }
                    )}
                </div>
    }
    
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const usersGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
