import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Autor } from "./autor";



@Injectable({
  providedIn: 'root'
})
export class AutorService {

  autorUrl = 'http://localhost:8080/autor';

  constructor(private http: HttpClient) { }

  adicionar(autor: Autor): Promise<any> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/x-www-form-urlencoded')
    .append('Authorization', 'Basic Y2xpZW50OmNsaWVudA==');

    const body = `username=${autor.nome}&email=${autor.email}&password=${autor.senha}&grant_type=password`;

    return this.http.post<Autor>(`${this.autorUrl}`, Autor.toJson(autor),{headers})
      .toPromise();
  }

}
