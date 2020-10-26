const { User, Food, Food_type, Sport, Sport_type, Sleep, Weight, Water, Task} = require('../models');

const dashboardController = {
    getAllInfos: async (req, res) => {
        try {
            // Récupération des informations du user
            const id = parseInt(req.params.id);
            const user = await User.findByPk(id, {
                include: ['foods', 'sleeps', '']
            });
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json('Cet utilisateur n\'existe pas');
            }
            // Récupération des informations du sleep
            // Récupération des informations de l'alimentation
            // Récupération des informations du sport
            // Récupération des informations du water
            // Récupération des informations du weight
            // Récupération des informations du alimentation_type
            // Récupération des informations du sport_type
            // Récupération des informations du articles_Fav
            // Récupération des informations du task
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
};

module.exports = dashboardController;