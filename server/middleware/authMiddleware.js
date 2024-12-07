const jwt = require ('jsonwebtoken')

const protect = async (req,res,next) => {
    try {
        const token = req.headers['authorizations'].split(" ")[1]
        jwt.verify(token,process.env.JWT_SECRET,(err,decode) => {
            if (err) {
                return res.status(200).send({
                    message: 'Token is not valid',
                    success: false,
                })
            } else {
                req.body.userId  = decode.id
                next()
            }

        })


        
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            message: 'Auth error',
            success: false,
        })
        
    }
}

module.exports = protect;