const bcrypt = require ('bcrypt')

 const GenerateSalt = async (req,res) => {
    const salt = await bcrypt.generateSalt(10)
    return salt
}

 const HashPassword = async (password, salt) => {
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

module.exports = GenerateSalt
module.exports = HashPassword