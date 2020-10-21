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
                    lastName,
                    firstName,
                    email,
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
			// L'utilisateur existe bien en BDD, on va donc tester son mot de passe
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
		} catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
		}
    },
    // ça ne fonctionne pas, je n'arrive pas me co a la bdd je crois
    getProfile: async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            // d'un autre coté je veux pas recup les info via la session mais en recuperant les infos de ma BDD non ? 
            const user = await User.findByPk(id);
            // On oublie pas de supprimer le mot de passe et is_admin
            user.password = undefined;
            user.is_admin = undefined;
            // on renvoie les informations au front
            res.status(200).json(user);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
    
    updateProfile: async (req, res) => {
        try {
            // const { lastName, firstName, birthdate, gender, height, estimatedSleepTime, password } = req.body;
            const id = parseInt(req.params.id);
            const user = await User.findByPk(id);
            console.log(user);
            if (!user) {
                res.status(404).json({error: 'Cet utilisateur n\'existe pas'});
            } else {
                await user.update(req.body);
                res.status(200).json(user);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    deleteProfile: async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const user = await User.findByPk(id);
            await user.destroy()
            res.status(200).json(user);
            res.redirect('/');
            // Puis on redirige vers la page d'accueil
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
};

module.exports = userController;