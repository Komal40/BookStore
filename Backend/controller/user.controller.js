import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs'

export const signUp=async(req, res)=>{
    try {
        const {fullName,email, password}=req.body
        const user=await User.findOne({email})

        if(user){
            return res.status(400).json({message:"User Already Exists"})
        }

        const hashPassword=await bcryptjs.hash(password,10)
        const createdUser=new User({
            fullName:fullName,
            email:email,
            password:hashPassword
        })

        await createdUser.save()
        res.status(201).json({message:"User Created Successfully"})

    } catch (error) {
        console.log("Error: "+error)
        res.status(500).json({message:"Internal Server Error"})
    }
}



