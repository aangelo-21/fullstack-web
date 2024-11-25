const jwt = require('jsonwebtoken');
const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');

async function Signup(req, res,) {
    console.log(req.body);
    const bcryptRounds = bcrypt.genSaltSync(parseInt(process.env.BCRYPT_ROUNDS))
    const hashedPassword = bcrypt.hashSync(req.body.password, bcryptRounds)
    
    req.body.password = hashedPassword
    try {
        const user = await User.create(req.body)
        const payload = { email: req.body.email }
        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '240h' })

        return res.status(200).json({ token, role: user.role, email: user.email })
    }
    catch (error) {
        return res.status(500).send(error.message)
    }
}

async function Login(req, res) {
    console.log(req.body);
    try {
        const user = await User.findOne({
            where: { email: req.body.email }
            
        })
        console.log(user)
        if (!user) return res.status(404).send("Error, check email & password")
           
        const comparePass = bcrypt.compareSync(req.body.password, user.password)

        if (comparePass) {
            const payload = { email: user.email }
            const token = jwt.sign(payload, process.env.SECRET)
            return res.status(200).json({ token, role: user.role , email: user.email
            })
        } else {
            return res.status(404).json("Error, check email & password")
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


module.exports = { Signup, Login}