import { DatabaseModel } from "./model/DataBaseModel.js";
import { server } from "./server.js";

const port: number = parseInt(process.env.SERVER_PORT as string);

new DatabaseModel().testeConexao().then((resbd) => {
    if(resbd) {
        console.clear();
        console.log("Conexão com o banco realizada com sucesso!");
        server.listen(port, () => {
            console.log(`Servidor rodando em http://localhost:${port}`);
        })
    } else {
        console.log('Não foi possível conectar ao banco de dados');
    }
})