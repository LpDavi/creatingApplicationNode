const multer = require('multer');
const { Router } = require("express");//"require("express");" - função especial em Node.js que permite importar módulos externos para serem usados em seu código.
const uploadConfig = require('../configs/upload');

const UsersController = require("../controllers/UsersController");
const UserAvatarController = require("../controllers/UserAvatarController");
const ensureAuthencated = require('../middlewares/ensureAuthencated');

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthencated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthencated, upload.single("avatar"), userAvatarController.update) ;

module.exports = usersRoutes;