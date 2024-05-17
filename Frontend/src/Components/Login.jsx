import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
                className="outline-none w-80 border px-3 dark:bg-slate-900 dark:text-white"
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
                className="outline-none w-80 border px-3 dark:bg-slate-900 dark:text-white"
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
                <span className="underline text-blue-500">
                  <Link to="/signup">SignUp</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
