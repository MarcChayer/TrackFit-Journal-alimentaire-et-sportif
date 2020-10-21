const { Article } = require('../models/article');

const articlesController = {
    getArticlesByLabel : async (req, res) => {
        try {
            const allArticles = await Article.findAll({
                where : {
                    title,
                    content,
                    media,
                    label,
                }
            })
            res.status(200).json(allArticles);
        } catch (error) {
            console.log(error);
            res.status(500).json(error.toString());
        }
    },
};

module.exports = articlesController;