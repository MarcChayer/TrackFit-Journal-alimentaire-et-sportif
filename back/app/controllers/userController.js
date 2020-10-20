const User = require('../models/user');


const userController = {
    signupAction: async (req, res) => {
        try {
            console.log('user', req.body);
            const { lastName, firstName, email, password } = req.body;
            const bodyError=[];
            // On verifie que l'user n'est pas en BDD
            const user = await User.findOne({ where: { email: email } });
            if (user) {
                bodyError.push('Cet utilisateur existe déjà');
            }
            if (bodyError.length) {
                res.status(400).json(bodyError);
            } else {
                let newUser = User.build({
                    lastName,
                    firstName,
                    email,
                    password
                });
                await newUser.save();
                res.status(200).json(newUser);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
}

module.exports = userController;