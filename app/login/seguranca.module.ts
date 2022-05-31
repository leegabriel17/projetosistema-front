import { AutorService } from './autor.service';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PersonagemService } from "../personagem/personagem.service";
import { LoginFormComponent } from "./signup/login.component";
import { RegisterFormComponent } from "./singin/register.component";

export function tokenGetter(): any {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:8080'],
        disallowedRoutes: ['http://localhost:8080/oauth/token']
      }
    })
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  providers: [
    JwtHelperService,
    PersonagemService,
    AutorService
  ]
})
export class SegurancaModule { }
