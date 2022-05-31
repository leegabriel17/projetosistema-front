
import { Personagem } from './../../model';
import { ErrorHandlerService } from '../../error-handler.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonagemService } from '../personagem.service';

@Component({
  selector: 'app-personagem-cadastro',
  templateUrl: './cpersonagem.component.html',
  styleUrls: ['./cpersonagem.component.css']
})
export class CpersonagemComponent implements OnInit {



  personagem = new Personagem();

  constructor(
    private personagemService: PersonagemService,
    private errorHander: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

salvar(form: NgForm) {
    this.adicionarpersonagem(form);
}
ngOnInit(): void {
  const codigoPersonagem = this.route.snapshot.params[`codigo`];
  if (codigoPersonagem) {
    this.carregarPersonagem(codigoPersonagem);
  }
}

carregarPersonagem(codigo: number): any {
  return this.personagemService.buscarPorCodigo(codigo)
    .then((retorno: Personagem) => {
      this.personagem = retorno;
    })
    .catch((erro: any) => this.errorHander.handle(erro));
}
/*
if (loginUsuario !== "undefined") {
  this.carregarUsuario(loginUsuario);
  this.personagemNovo = false;
}
carregarUsuario(codigo: number) {
  this.personagemService.buscarPorCodigo(codigo)
    .then((usuario: Usuario) => {
      this.usuario = usuario;
      this.usuarioNovo = false;
    })
    .catch((erro: any) => this.errorHandler.handle(erro));
}
*/
adicionarpersonagem(form: NgForm) {
  this.personagemService.adicionar(this.personagem)
    .then(personagemAdicionado => {
      alert('Solicitacao realizada com sucesso!');
      this.router.navigate(['/cadastroPersonagem',personagemAdicionado]);
    })
    .catch(erro => this.errorHander.handle(erro));
  }
}


