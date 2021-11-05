const db = require("../../data/dbConfig.js");

const checkNameLength = (req, res, next)=>{
    const {doggoName} = req.body
    if(doggoName.length > 20){
        res.status(400).json({message: "Name too long"})
    }
    else{
        next()
    }
}

const checkDoggoExists = async (req, res, next)=>{
    const {doggoName} = req.body

    const dogResults = await db("doggos")
    .select("doggoID", "doggoName")
    .where("doggoName", doggoName)
    .first();
    
    if(!dogResults){
        res.status(400).json({message: "Dog does not exist"})
    }
    else{
        next()
    }
}

module.exports={
    checkNameLength,
    checkDoggoExists
}