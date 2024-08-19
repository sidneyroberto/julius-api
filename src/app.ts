import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as logger from "morgan";

import { routerUsuario } from "./route/usuario";
import { routerLancamento } from "./route/lancamento";

/**
 * Cria a aplicação
 */
export const app = express();

/**
 * Libera o acesso aos serviços
 */
app.use(cors());

/**
 * Permite receber e enviar JSON
 */
app.use(bodyParser.json());

/**
 * Configura os logs
 */
app.use(logger("dev"));

/**
 * Configuração de rotas
 */

app.use("/usuario", routerUsuario);
app.use("/lancamento", routerLancamento);
app.use("/", (req, res) => res.send("API do app Julius"));
