import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

export default function Login() {
  const navigate=useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) =>{
    const userInfo={
      email:data.email,
      password:data.password
    }

    await axios.post("http://localhost:4001/user/login", userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Logged In Successfull")
        document.getElementById('my_modal_3').close()

        setTimeout(()=>{
        window.location.reload()
        localStorage.setItem("User", JSON.stringify(res.data.user))
        }, 2000)

      }
    }).catch(err=>{
      if(err.response){
        console.log(err)
        toast.error(err.response.data.message)
      }
    })
  }

  const handleSignup=()=>{
    document.getElementById('my_modal_3').close()
    navigate('/signup')
  }
  
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white dark:border">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link className=" btn-sm btn-ghost absolute right-2 top-2"
            onClick={()=>document.getElementById('my_modal_3').close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login !</h3>
            <div className="mt-3 space-y-2">
              <span>Email</span>
              <br />
              <input
                placeholder="Enter Your Email"
                type="email"
                {...register("email", { required: true })}
                className="outline-none w-80 border px-3 py-2 dark:bg-slate-900 dark:text-white"
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
                {...register("password", { required: true })}
                className="outline-none w-80 border px-3 py-2 dark:bg-slate-900 dark:text-white"
              />
              <br/>
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex justify-around align-center mt-4">
              <button className="bg-pink-500 text-white rounded-md cursor:pointer px-3 py-1">
                Login
              </button>
              <p>
                Not Registered?{" "}
                <span className="underline text-blue-500 cursor-pointer" onClick={handleSignup} >
                  Signup
                  {/* <Link to="/signup">SignUp</Link> */}
                </span>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
