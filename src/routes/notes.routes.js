const { Router } = require("express");//"require("express");" - função especial em Node.js que permite importar módulos externos para serem usados em seu código.

const NotesController = require("../controllers/NotesController");
const ensureAuthencated = require('../middlewares/ensureAuthencated');

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.use(ensureAuthencated);

notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);
notesRoutes.get("/", notesController.index);

module.exports = notesRoutes;