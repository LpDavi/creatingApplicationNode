const { Router } = require("express");//"require("express");" - função especial em Node.js que permite importar módulos externos para serem usados em seu código.

const TagsController = require("../controllers/TagsController");
const ensureAuthencated = require('../middlewares/ensureAuthencated');

const tagsRoutes = Router();

const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthencated, tagsController.index);


module.exports = tagsRoutes;