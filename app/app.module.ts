import { CpersonagemComponent } from './personagem/cadastroPersonagem/cpersonagem.component';
import { GpersonagemComponent } from './personagem/gerenciaPersonagem/gpersonagem.component';
import { SegurancaModule } from './login/seguranca.module';
import { PersonagemModule } from './personagem/personagem.module';
import {  RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import { LoginFormComponent } from './login/signup/login.component';
import { RegisterFormComponent } from './login/singin/register.component';

const routes: Routes = [
  {path: 'gerenciaPersonagem', component: GpersonagemComponent},
  {path: 'cadastroPersonagem', component: CpersonagemComponent},
  {path: 'cadastroPersonagem/:codigo', component: CpersonagemComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'singin', component: RegisterFormComponent}
   //fazer redirecionamento para pagina principal
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    PersonagemModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    SharedModule,
    SegurancaModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent],

})
export class AppModule {

}
