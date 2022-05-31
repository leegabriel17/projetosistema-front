import * as moment from "moment";
import { Autor } from "./login/autor";



export class Inventario{
  bebiveis:String| undefined;
	alimentos:String| undefined;
	conhecimneto:String| undefined;
	medicinais:String| undefined;
	armas:String| undefined;

}

export class Personagem{

  codigo: number| undefined;
  nome: string| undefined;
  titulo: string| undefined;
  idade: number| undefined;
  dataNascimento: Date| undefined;
  localNascimento: string| undefined;
  genero: string| undefined;
  altura: string| undefined;
  corDosOlhos: string| undefined;
  porte: string| undefined;
  corDaPele: string| undefined;
  cabelo: string| undefined;
  qualidades: string| undefined;
  defeitos: string| undefined;
  traumas: string| undefined;
  valores: string| undefined;
  backGround: string| undefined;
  autor = new Autor();
  inventario = new Inventario();

  static toJson(personagem: Personagem): any {
    return {

     codigo: personagem.codigo,
      nome: personagem.nome,
      titulo: personagem.titulo,
      idade: personagem.idade,
      dataNascimento: moment(personagem.dataNascimento).format('DD/MM/YYYY'),
      localNascimento: personagem.localNascimento,
      genero: personagem.genero,
      altura: personagem.altura,
      corDosOlhos: personagem.corDosOlhos,
      porte: personagem.porte,
      corDaPele: personagem.corDaPele,
      cabelo: personagem.cabelo,
      qualidades: personagem.qualidades,
      defeitos: personagem.defeitos,
      traumas: personagem.traumas,
      valores: personagem.valores,
      backGround: personagem.backGround,
      autor: personagem.autor,
      inventario: personagem.inventario
    };
  }
}

