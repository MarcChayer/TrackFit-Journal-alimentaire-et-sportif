const { User, Food, Food_type, Sport, Sport_type, Sleep, Weight, Water, Task} = require('../models');

const dashboardController = {
    getAllInfos: async (req, res) => {
        try {
            // Récupération des informations du user
            const id = parseInt(req.params.id);
            const user = await User.findByPk(id, {
                // Récupération des informations de sleep, food, sport, water, weight, task, article_fav
                include: [
                    {association: 'sleeps'},
                    {association: 'foods', include: ['foods_type']},
                    {association: 'sports', include: ['sports_type']},
                    {association: 'weights'},
                    {association: 'waters'},
                    {association: 'tasks'},
                    {association: 'articles'}
                ]
            });
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json('Cet utilisateur n\'existe pas');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    postDataSport: async (req, res) => {
        try {
            const dataSport = new Sport({
                date: req.body.date,
                duration: req.body.duration,
                intensity: req.body.intensity,
                emotion: req.body.emotion,
                user_id: req.params.id,
                sport_type_id: req.body.sport_type_id
            });
            if (dataSport) {
                await dataSport.save();
                res.status(200).json(dataSport);
            } else {
                res.status(404).json('Cet utilisateur n\'existe pas');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    postDataFood: async (req, res) => {
        try {
            const dataFood = new Food({
                date: req.body.date,
                quantity: req.body.quantity,
                emotion: req.body.emotion,
                user_id: req.params.id,
                food_type_id: req.body.food_type_id
            });
            if (dataFood) {
                await dataFood.save();
                res.status(200).json(dataFood);
            } else {
                res.status(404).json('Cet utilisateur n\'existe pas');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
};

module.exports = dashboardController;