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
    
    loginAction: async (req, res) => {
        const { email, password } = req.body;
        // on créé une const contenant un array d'erreur
        const bodyError=[];
		try {
			// On vérifie que l'utilisateur est présent en BDD
		const user = await User.findOne({ where: { email: email } });
			if (!user) {
				bodyError.push(`Cet utilisateur n'existe pas`);
			}
			// L'utilisateur existe bien en BDD, on vient de récupérer ses informations dans la variable user, on va donc tester son mot de passe
			if (!bcrypt.compareSync(password, user.password)) {
				// Si le mot de passe n'est pas le bon alors on va envoyer une erreur
				bodyError.push(`Le mot de passe est incorrect`);
			}
			// L'utilisateur existe en BDD, et le mot de passe est correct
			// Il faut donc connecter cet utilisateur
			// On le stocke dans la session
            req.session.user = user.toJSON();
            // On oublie pas de supprimer le mot de passe
			delete req.session.user.password;
            res.status(200).json(user);
			// Puis on redirige vers la page d'accueil
			// res.redirect('/');
		// On capture les eventuelles exceptions ( erreurs )
		} catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
		}
    },

    renderLogin: (req, res) => {
        res.render('login');
	},
}

module.exports = userController;