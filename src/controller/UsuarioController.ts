import { Usuario } from "../model/Usuario.js";
import type { Request, Response } from "express";

interface UsarioDTO {
    nome: string;
    tipoUsuario: string;
    contato: string
}

class UsuarioController extends Usuario {
    static async todos(req: Request, res: Response): Promise<any> {

        try {
            const listaDeUsuarios= await Usuario.listarUsuario();
            return res.status(200).json(listaDeUsuarios);
        } catch (error) {
            console.log(`Erro ao acessar método herdado: ${error}`);
            return res.status(400).json("Erro ao recuperar as informações do Usuário");
        }
    }
}

export default UsuarioController;