import { Repository } from "typeorm";
import { Usuario } from "../entity/Usuario";
import { AppDataSource } from "../data-source";

export class UsuarioController {
  private _repo: Repository<Usuario>;

  constructor() {
    this._repo = AppDataSource.getRepository(Usuario);
  }

  async salvar(usuario: Usuario) {
    const usuarioSalvo = await this._repo.save(usuario);
    return usuarioSalvo;
  }

  async recuperarTodos() {
    const usuarios = await this._repo.find();
    return usuarios;
  }

  async recuperarPorId(id: number) {
    const usuario = await this._repo.findOneBy({ id });
    return usuario;
  }

  async recuperarLancamentosDoUsuario(id: number) {
    const usuario = await this._repo.findOne({
      where: { id },
      relations: ["lancamentos"],
    });

    return usuario.lancamentos;
  }
}
