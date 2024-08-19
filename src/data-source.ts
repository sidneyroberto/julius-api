import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "./entity/Usuario";
import { Lancamento } from "./entity/Lancamento";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "juliusapp.sqlite",
  synchronize: true,
  logging: false,
  entities: [Usuario, Lancamento],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
