const bcrypt = require('bcrypt');
const User = require('../models/user');


const userController = {
    signupAction: async (req, res) => {
        try {
            const { lastName, firstName, email, password } = req.body;
            // on créé une const contenant un array d'erreur
            const bodyError=[];
            // si l'utilisateur ne rempli les input, il reçoit une alert
            if (lastName.trim() === '') {
				bodyError.push('Merci de saisir votre nom');
            }
            if (firstName.trim() === '') {
				bodyError.push('Merci de saisir votre prénom');
			}
            if (email.trim() === '') {
				bodyError.push('Merci de saisir une adresse email');
			}
			if (password.trim() === '') {
				bodyError.push('Merci de saisir un mot de passe');
            }
            // pas sur pour le "req.body.passwordConfirm" ????????
			if (password !== password) {
				bodyError.push('Les 2 mots de passe sont différents');
			}
			// On vérifie que l'utilisateur est présent en BDD
            const user = await User.findOne({ where: { email: email } });
            if (user) {
                bodyError.push('Cet utilisateur existe déjà');
            }
            if (bodyError.length) {
                res.status(400).json(bodyError);
            } else {
                // on stock le password crypté
                const passwordEncrypted = bcrypt.hashSync(password, 10);

                let newUser = User.build({
                    lastName: req.body.lastName,
                    firstName: req.body.firstName,
                    email: req.body.email,
                    password: passwordEncrypted,
                });
                await newUser.save();
                res.status(200).json(newUser);
                // on redirige ensuite sur la page login
                // res.redirect('/login');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

	renderSignup: (req, res) => {
		res.render('signup');
	},
}

module.exports = userController;