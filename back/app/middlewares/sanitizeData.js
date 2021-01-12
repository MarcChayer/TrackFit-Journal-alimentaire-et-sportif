const sanitizeHtml = require('sanitize-html');

const sanitizeData = (req, _, next) => {
    if (req.params) {
        for (const prop in req.params) {
            req.params[prop] = sanitizeHtml(req.params[prop]);
        }
    } 
    if (req.body) {
        for (const prop in req.body) {
            req.body[prop] = sanitizeHtml(req.body[prop]);
        }
    }
    if (req.query) {
        for (const prop in req.query) {
            req.query[prop] = sanitizeHtml(req.query[prop]);
        }
    }
    // c'est bon tout est propre => on passe à la suite !
    next();
};


module.exports = sanitizeData;
