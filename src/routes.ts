import express from "express";
import { SERVER_ROUTES } from "./appConfig.js";
import UsuarioController from "./controller/UsuarioController.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ mensagem: "Rota padrão" })
});


router.get(SERVER_ROUTES.LISTAR_USUARIO, UsuarioController.todos);




export { router }