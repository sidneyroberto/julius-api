import { app } from './app';

const PORTA = 3000;

const server =
    app.listen(PORTA, () => console.log(`App ouvindo na porta ${PORTA}`));

/**
 * Ao encerrar o processo, o app é finalizado também
 */
process.on('SIGINT', () => {
    server.close();
    console.log('App finalizado');
});