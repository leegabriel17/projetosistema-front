import { Personagem } from './../model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  personagensUrl = 'http://localhost:8080/personagem';

  constructor(private http: HttpClient) { }

  listarTodas(): Promise<Personagem> | any {
    return this.http.get(`${this.personagensUrl}`)
      .toPromise()
      .then(response => {
        return response ;
      });
  }

  excluir(codigo: number): Promise<any> {
    return this.http.delete(`${this.personagensUrl}/remover/${codigo}`)
      .toPromise()
      .then(() => null);
  }
  adicionar(personagem: Personagem): Promise<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<Personagem>(`${this.personagensUrl}`, Personagem.toJson(personagem), { headers })
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<any> {
    return this.http.get<Personagem>(`${this.personagensUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const personagem = response;

        return personagem;
      });
  }


}

