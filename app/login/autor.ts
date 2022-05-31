export class Autor{
    codigo: number| undefined;
    nome: string | undefined;
    email: string | undefined;
    senha: string | undefined;
    permissoes = new Permissoes();

    static toJson(autor: Autor): any {
      return{
        codigo: autor.codigo,
        nome: autor.nome,
        email: autor.email,
        senha: autor.senha,
        permissoes: autor.permissoes
      }
    }
}

export class Permissoes{
  codigo:number| undefined;
	descricao:String| undefined;
}

