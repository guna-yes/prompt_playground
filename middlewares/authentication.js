export const authentication =(req,res,next)=>{
    const {url,body} =req;
    console.log("AUTHENTICATION_MIDDLEWARE");
        // throw new Error("authenticaion failed")

    next();
}