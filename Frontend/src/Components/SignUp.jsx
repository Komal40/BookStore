import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

export default function SignUp() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();


      const onSubmit = async(data) => {
        const userInfo={
          fullName:data.fullName,
          email:data.email,
          password:data.password
        }

        await axios.post("http://localhost:4001/user/signup", userInfo)
        .then((res)=>{
          console.log(res.data)
          if(res.data){
            toast.success("SignUp Successfull")
          }
          localStorage.setItem("User", JSON.stringify(res.data.user))
        }).catch(err=>{
          if(err.response){
            console.log(err)
            toast.error(err.response.data.message)
          }
        })
      }


  return (
   <>
      <div className="flex h-screen items-center justify-center border dark:bg-slate-900 dark:text-white">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <div id="my_modal_3" className="">
        <div className="border p-10 shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-ghost absolute right-2 top-2">
              ✕
            </button>

          <h3 className="font-bold text-lg"> SignUp !</h3>
          <div className="mt-3 space-y-2">
          <span>Name</span>
            <br />
            <input
              placeholder="Enter Your Name"
              type="text"
              className="outline-none w-80 border px-3 py-2 dark:bg-slate-900 dark:text-white"
              {...register("fullName", { required: true })}
            />
            <br/>
              {errors.fullName && <span className="text-sm text-red-500">This field is required</span>}
            <br/><br/>
            <span>Email</span>
            <br />
            <input
              placeholder="Enter Your Email"
              type="email"
              className="outline-none w-80 border px-3 py-2 dark:bg-slate-900 dark:text-white"
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
              className="outline-none w-80 border px-3 py-2 dark:bg-slate-900 dark:text-white"
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
