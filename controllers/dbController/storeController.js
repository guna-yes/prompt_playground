import { Store } from "../../models/storeModel.js";

export const createStore = async( req,res , next) =>{
    try{
        
        const store =await Store.create(req.body);
        res.status(200).json({
            message:true,
            message:"Store Created Succcessfully",
            data:store
        })
    }
    catch(err){
        next(err)
    }
}