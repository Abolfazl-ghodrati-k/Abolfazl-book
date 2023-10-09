import React from 'react'
import User from './User'

const Users = ({ users }) => {
  return (
    <div className='flex items-center justify-end gap-1'>
     {users?.map((user) => (
          <User {...user}  />
     ))}
    </div>
  )
}

export default Users