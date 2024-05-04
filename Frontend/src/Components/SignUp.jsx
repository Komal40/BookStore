import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

export default function SignUp() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);


  return (
   <>
      <div className="flex h-screen items-center justify-center border dark:bg-slate-900 dark:text-white">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <div id="my_modal_3" className="">
        <div className="border p-10 shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
      
          <h3 className="font-bold text-lg"> SignUp !</h3>
          <div className="mt-3 space-y-2">
          <span>Name</span>
            <br />
            <input
              placeholder="Enter Your Name"
              type="text"
              className="outline-none w-80 border px-3 dark:bg-slate-900 dark:text-white"
              {...register("name", { required: true })}
            />
            <br/>
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            <br/><br/>
            <span>Email</span>
            <br />
            <input
              placeholder="Enter Your Email"
              type="email"
              className="outline-none w-80 border px-3 dark:bg-slate-900 dark:text-white"
              {...register("email", { required: true })}
            />
            <br/>
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            <br />
            <br />
            <span>Password</span>
            <br />
            <input
              placeholder="Enter Your Password"
              type="password"
              className="outline-none w-80 border px-3 dark:bg-slate-900 dark:text-white"
              {...register("password", { required: true })}
            />
<br/>
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
           
          </div>
          <div className="flex justify-around align-center mt-4">
              <button className="bg-pink-500 text-white rounded-md cursor:pointer px-3 py-1">SignUp</button>
              <p>
                Have Registered? <span className="underline text-blue-500"><Link to='/'
                // onClick={()=>document.getElementById('my_modal_3').showModal()}
                >Login</Link></span>
              </p>
            </div>
            </form>
        </div>
    
      </div>
      
    </div>
   </>
  )
}
