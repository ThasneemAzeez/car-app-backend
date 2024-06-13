const mongoose=require("mongoose")
const Scheema= mongoose.mongoose.Scheema(
    {
        "name":{type:String,required:true},
        "model":{type:String,required:true},
        "price":{type:String,required:true},
        "company":{type:String,required:true},
        
    }
)

let carmodel = mongoose.model("cars",Scheema);
module.exports={carmodel}