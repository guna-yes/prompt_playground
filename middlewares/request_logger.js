export const requestLogger =(req,res,next)=>{
    const {url,body} = req;
    console.log(`${new Date()}:: URL::${url},body::${body}`);
    next();
}