import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { currentUser } = useSelector(state => state.user)
  
  const handleSubmit = (first) => { second }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>

      <form className="flex flex-col gap-4">
        <img
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          src={currentUser.avatar}
          alt="profile"
        />

        <input
          type="text"
          placeholder="username"
          id="username"
          className="p-3  border rounded-lg "
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          className="p-3  border rounded-lg "
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          className="p-3  border rounded-lg : "
        />

        <button
          onSubmit={handleSubmit}
          className="bg-slate-700 p-3 rounded-lg text-white uppercase"
        >
          Update
        </button>

        <div className=' flex justify-between'>
          <button className="text-red-700">Delete account ?</button>
          <button className="text-red-700">Sign out</button>
        </div>
      </form>
    </div>
  );
}

export default Profile
