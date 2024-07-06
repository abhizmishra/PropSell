import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <div className=" p-3 max-w-md mx-auto">
        <h1 className="text-center my-7 text-3xl font-semibold">Sign Up</h1>

        <form className="flex flex-col gap-3 ">
          <input
            className="p-3 rounded-lg"
            type="text"
            placeholder="Username"
          />
          <input className="p-3 rounded-lg" type="email" placeholder="Email" />
          <input
            className="p-3 rounded-lg"
            type="Password"
            placeholder="Password"
          />

          <button className=" bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Sign up
          </button>
        </form>

        <div className=" flex flex-col items-center gap-2 mt-5">
          <p> Have an account?</p>
          <Link to={"/sign-in"}>
            <span className="text-blue-700">Sign in </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
