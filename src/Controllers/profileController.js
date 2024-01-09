const profileModel = require('../Models/profileModel')

//create
exports.create = async(req, res) => {
    let reqBody = req.body;
    try{
        let result = await profileModel.create(reqBody)
        res.status(200).json({status:"success", data: result})

    }catch(err){
        res.status(400).json({status:"Failed", data: err.toString()})
    }

};

//read
exports.read = async(req, res) => {
    try{
        let result = await profileModel.find()
        res.status(200).json({status: "Success", data: result})
        
    }catch(err){
        res.status(200).json({status: "Failed", data: err.toString()})
    }
}

//readById
exports.readById = async (req, res) => {
    let id = req.params.id
    let query = {'_id': id}
    
    try{
        let result = await profileModel.find(query)
        res.status(200).json({status: "Success", data: result})
        
    }catch(err){
        res.status(200).json({status: "Failed", data: err.toString()})
    }
}

//Update
exports.update = async (req, res) => {
    let id = req.params.id
    let query = {'_id': id}
    let reqBody = req.body

    try{
        let result = await profileModel.updateOne(query, reqBody)
        res.status(200).json({status: "Success", data: result})
        
    }catch(err){
        res.status(200).json({status: "Failed", data: err.toString()})
    }
}

//delete
exports.delete = async (req, res) => {
    let id = req.params.id
    let query = {'_id': id}
    
    try{
        let result = await profileModel.deleteOne(query)
        res.status(200).json({status: "Success", data: result})
        
    }catch(err){
        res.status(200).json({status: "Failed", data: err.toString()})
    }
}

