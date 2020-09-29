import { Router } from 'express';

export const routerUsuario = Router();

/**
 * Cria uma rota padrão
 */
routerUsuario.get('/', (req, res) => res.send('Serviços de Usuário'));