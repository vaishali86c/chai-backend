console.log("user controller")

import  { asyncHandler } from "../utils/asyncHandler.js"



const registerUser = asyncHandler( async (req, res) => {
    // get user details from frontend

    // validation - not empty

    // check if user already exists: username, email

    // check for images, check for avatar

    // upload to them cloudinary, avatar

    // create user object - create entry in db

    // remove password and refresh token feild from response

    // check for user creation
    
    // return response if not please throw error

    const {fullName, email, username, password } = req.body

    console.log("email", email);
    console.log(fullName) 
})



export { 
    registerUser,
}