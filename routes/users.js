const mongoose = require("mongoose")
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/pixtrest")
.then(()=>{
  console.log("Mongo Db connected to the Server")
})
.catch((err)=>{
  console.log(err,"Internal Server Error")
})

const userSchema = mongoose.Schema({
  username:String,
  name:String,
  email:String,
  contact:Number,
  password:String,
  profileImage:String,
  boards:{
    Type:Array,
    default:[]
  },
  posts:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"post"
    }
  ]
})

userSchema.plugin(plm)

module.exports = mongoose.model("user",userSchema)