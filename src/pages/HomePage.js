import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../features/userSlice';
import { useNavigate } from 'react-router';


const HomePage = () => {
  const { users } = useSelector((store) => store.userInfo)
  // console.log(users)
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <div className='grid grid-cols-3 justify-between items-center gap-4 mt-4'>
      {users && users.map((user, i) => {


        return <div className=' mx-4 rounded-md shadow-blue-gray-200 bg-blue-gray-50 hover:shadow-inner'>
          <img src={user.img} alt="" height={200} width={200} />
          <h1 className='text-xl font-sans font-bold text-center'>{user.username}</h1>
          <div className='p-3'>
            <p className='font-bold text-lg'>Details:</p>
            <h2>Country: {user.country}</h2>
            <h2>Gender: {user.gender}</h2>
            <h2>Habits:{user.hobies.toString()}</h2>

            <p>Message: {user.msg}</p>
          </div>
          <div className='flex justify-end gap-4 px-1'>
            <button onClick={(e) => dispatch(deleteUser(user))}
              className='text-red-600 hover:scale-[2]'><i className="fa-solid fa-trash fa-lg"></i></button>
            <button className='text-green-700 hover:scale-[2]' onClick={(e) => nav(`/update-form/${user.id}`)}><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
          </div>
        </div>
      })}



    </div >
  )
}

export default HomePage