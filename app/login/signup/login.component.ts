import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";



@Component({
  selector: 'app_login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginFormComponent implements OnInit{

  msg: any;

  constructor(private auth: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  login(usuario: string, senha: string){
    this.auth.login(usuario, senha)
      .then(() => {
        this.router.navigate(['/gerenciaPersonagem']);
      })
      .catch(() => {
        alert('Autor e/ou senha inválida!');
      })
  }

}
