import { useRef } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>

      <form className="flex flex-col">
      
        <img
          src={currentUser.avatar}
          className=" sm:scale-125 mt-3 object-cover rounded-full self-center"
          alt="profile"
          
        />

        <input
          type="text"
          placeholder="username"
          id="username"
          className="gap-3 p-2 border rounded-xl mt-7"
        />
        <input
          type="email"
          placeholder="email"
          id="username"
          className="gap-3 p-2 border rounded-xl mt-7"
        />
        <input
          type="password"
          placeholder="password"
          id="username"
          className="gap-3 p-2 border rounded-xl mt-7"
        />

        <button className="uppercase border font-semibold rounded-lg mt-5 p-3 bg-slate-600 text-white">
          update
        </button>
        <button className="uppercase  text-white border font-semibold rounded-lg mt-3 p-3 bg-green-600">
          Create Listing
        </button>
        <div className="flex flex-row justify-between mx-3 mt-2">
          <button className="text-red-600 text-lg ">Delete Account</button>
          <button className="text-red-600 text-lg ">Logout</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
