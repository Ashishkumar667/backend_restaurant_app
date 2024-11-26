
const userSchema = require("../models/userSchema");

module.exports = async (req, res, next) => {
    try {
        const useradmin = await userSchema.findById(req.params.id);
        if(!useradmin){
            return res.status(401).send({
                message:"Only Admin can access this page"
            });
        }else{
            next();
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Un- Authorizationn Access',
            error
        })
    }
}