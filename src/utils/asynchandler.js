// creating a common wrapper function and exporting it using promises
const asyncHandler = (requestHandler) =>{
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err) =>{next(err)})
    }
}

export{asyncHandler}


// const asyncHandler = (func)=>{}
// const asyncHandler = (func)=>{async ()=>{}} func inside a function 

// const asyncHandler  =(fn)=> async(req,res,next) =>{ // higher order function
//     try {
//         await(req,res,next);
//     } catch (error) {
//         res.status(err.code || 404).json({
//             success:false,
//             message:err.message
//         })
//     }
// } 