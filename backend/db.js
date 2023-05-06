const mongoose =  require("mongoose");
const mongoURL ="mongodb://localhost:27017/roomAllotmentDB";

const connectToMongo=()=>{
  mongoose.connect(mongoURL,{useNewUrlParser: true})
}
module.exports= connectToMongo;