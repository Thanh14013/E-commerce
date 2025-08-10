import userModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"});
}

const loginUser = async (req, res) => {

    try {
        
        const {email,password} = req.body;

        const user = await userModel.findOne({email});

        if (!user){
            return res.json({success: false, message: "User does not exist!"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch){
            const token = createToken(user._id);
            return res.json({success: true, token});
        }
        else{
            return res.json({success: false, message: "Invalid credentials!"});
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }

}

const registerUser = async (req, res) => {

    const { name, email, password } = req.body;

   try {
    // checking user already or not
    const exists = await userModel.findOne({email});

    if (exists){
        return res.json({success: false, message: "User already exists!"});
    }

    if (!validator.isEmail(email)){
        return res.json({success: false, message: "Invalid email format!"});
    }
    if (password.length < 8){
        return res.json({success: false, message: "Password must be at least 8 characters long!"});
    }

    //hasing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
        name,
        email,
        password: hashedPassword
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({success: true, token})

    }
    catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
    
}


const adminLogin = async (req, res) => {

}


export { loginUser, registerUser, adminLogin };