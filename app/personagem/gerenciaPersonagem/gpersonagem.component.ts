import { PersonagemService } from '../personagem.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/error-handler.service';

@Component({
  selector: 'app-gpersonagem',
  templateUrl: './gpersonagem.component.html',
  styleUrls: ['./gpersonagem.component.css']
})
export class GpersonagemComponent implements OnInit {

  personagens=[];
  personagemNovo:number | undefined;
  constructor(
    private personagemService: PersonagemService,
    private errorHandler: ErrorHandlerService,

) {}

  ngOnInit(): void {
    this.listarPersonagem();
  }

  listarPersonagem(){
    this.personagemService.listarTodas()
    .then((resultado:any) => {
      this.personagens = resultado;
    })
    .catch((erro:any) => this.errorHandler.handle(erro));
  }

  excluir(personagens: any): void {
    this.personagemService.excluir(personagens.codigo)
    .then(result => {
      this.listarPersonagem();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

    /*
    updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      this.personagemNovo[id][property] = editField;
    }




    changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
    }

    searchItems() {

    }*/
}
