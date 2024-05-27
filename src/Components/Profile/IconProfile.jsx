import React from 'react'
import { useNavigate } from 'react-router-dom'
import userDefault from '../../assets/user-default.png'

function IconProfile({user}) {
  const navigate = useNavigate();
  console.log(user)
  return (
    <div className="fixed top-5 right-5 rounded-2xl bg-white shadow-xl p-2  cursor-pointer hover:shadow-xl hover:scale-105" onClick={() => navigate('/profile/me')}>
    <img
      className=" size-12 rounded-xl"
      src={
        user.picture == ""
          ? userDefault
          : user.picture
      }
      alt={user.nombre}
    />
  </div>

  )
}

export default IconProfile