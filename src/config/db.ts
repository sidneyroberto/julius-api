import { createConnection } from 'typeorm';

export const conectarServidorNoBD = async () => {
    const conexao = await createConnection();
    console.log(`App conectado ao BD ${conexao.options.database}`);

    process.on('SIGINT', () => {
        conexao.close().then(() => console.log('Conexão com o BD fechada'));
    });
};