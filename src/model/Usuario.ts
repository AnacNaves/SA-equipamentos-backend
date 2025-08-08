import { DatabaseModel } from "./DataBaseModel.js";
const dataBase=new DatabaseModel().pool;


export class Usuario {
    private idUsuario: number = 0;
    private nome: string;
    private tipoUsuario: string;
    private contato: string;

    public constructor (_nome:string, _tipoUsuario:string, _contato:string){
        this.nome=_nome,
        this.tipoUsuario=_tipoUsuario,
        this.contato=_contato
    }
 
    
    public getIdUsuario(): number {
        return this.idUsuario;
    }
    public setIdUsuario(idUsuario: number): void {
        this.idUsuario=idUsuario;
    }
  

    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        this.nome=nome;
    }


    public getTipoUsuario(): string {
        return this.tipoUsuario;
    }
    public setTipoUsuario(tipoUsuario: string): void {
        this.tipoUsuario=tipoUsuario;
    }


    public getContato(): string {
        return this.contato;
    }
    public setContato(contato: string): void {
        this.contato=contato;
    }


    static async listarUsuario(): Promise <Array<Usuario> | null> {
        let listaDeUsuarios: Array<Usuario>=[];

        try{
            const querySelectUsuarios=`SELECT * FROM Usuario;`;
            const respostaBD = await dataBase.query(querySelectUsuarios);

            respostaBD.rows.forEach((usuario) => {
                let novoUsuario=new Usuario(
                    usuario.nome,
                    usuario.tipo_usuario,
                    usuario.contato
                );

                novoUsuario.setIdUsuario(usuario.id_usuario);
                listaDeUsuarios.push(novoUsuario);
            });

            return listaDeUsuarios;
        } catch (error) {
            console.log(`Erro ao acessar o modelo: ${error}`);
            return null;
        }
    }
}