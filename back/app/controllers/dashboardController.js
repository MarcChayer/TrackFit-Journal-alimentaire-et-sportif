const { Article, Food, Sleep, Sport, Task, User } = require('../models');
const Weight = require('../models/weight');
const Water = require('../models/water');

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
                    {association: 'articles'},
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
                sport_type_id: req.body.sport_type_id,
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
                food_type_id: req.body.food_type_id,
            });
            console.log('dataFood', dataFood);
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

    postDataWeight: async (req, res) => {
        try {
            const idUser = parseInt(req.params.id);
            const dataWeight = new Weight({
                user_id: idUser,
                date: req.body.date,
                weight: req.body.weight,
                imc: req.body.imc,
            });
            if (dataWeight) {
                await dataWeight.save();
                res.status(200).json(dataWeight);
            } else {
                res.status(404).json('Cet utilisateur n\'existe pas');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    postDataWater: async (req, res) => {
        try {
            const idUser = parseInt(req.params.id);
            const dataWater = new Water({
                user_id: idUser,
                date: req.body.date,
                water: req.body.water,
            });
            if (dataWater) {
                await dataWater.save();
                res.status(200).json(dataWater);
            } else {
                res.status(404).json('Cet utilisateur n\'existe pas');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    postDataSleep: async (req, res) => {
        try {
            const idUser = parseInt(req.params.id);
            const dataSleep = new Sleep({
                user_id: idUser,
                date: req.body.date,
                bedTime: req.body.bedTime,
                wakeUpTime: req.body.wakeUpTime,
            });
            if (dataSleep) {
                await dataSleep.save();
                res.status(200).json(dataSleep);
            } else {
                res.status(404).json('Cet utilisateur n\'existe pas');
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
    getAllTask: async (req, res) => {
        try {
            const idUser = parseInt(req.params.id);
            const allTask = await Task.findAll({
                where: {
                    user_id: idUser
                }
            })
            res.status(200).json(allTask)
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    createTask: async (req, res) => {
        try {
            const idUser = parseInt(req.params.id);
            const dataTask = new Task({
                user_id: idUser,
                title: req.body.title,
            });
            if (dataTask) {
                await dataTask.save();
                res.status(200).json(dataTask);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    deleteTask: async (req, res) => {
        try {
            const idUser = parseInt(req.params.id);
            const dataTask = await Task.findByPk(idUser);
            await dataTask.destroy();
            res.status(200).json('Cette tâche est bien supprimée');
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },

    updateTask: async (req, res) => {
        try {
            const idUser = parseInt(req.params.id);
            const dataTask = await Task.findByPk(idUser);
            if (!dataTask) {
                res.status(404).json({error: 'Cette tâche n\'existe pas'});
            } else {
                await dataTask.update(req.body);
                res.status(200).json(dataTask);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
    
};

module.exports = dashboardController;