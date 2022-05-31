import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {
     this.carregarToken();
  }

  login(autor: string,senha:string):Promise<void> {
     const headers = new HttpHeaders()
       .append('Content-Type', 'application/x-www-form-urlencoded')
       .append('Authorization', 'Basic Y2xpZW50OmNsaWVudA==');

    const body = `username=${autor}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl , body,{headers})
    .toPromise()
    .then((response:any)=>{
      console.log(response);
      this.armazenarToken(response['access_token']);
    })
    .catch((response:any) => {
      if(response.status ===400){
        if(response.error === 'invalid_grant'){
          return Promise.reject('Autor e/ou senha inválida!');
        }
      }
      return Promise.reject(response);
    })
  }

  private armazenarToken(token: string): void {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.armazenarToken(token);
    }
  }

}

