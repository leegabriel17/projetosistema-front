import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { AuthService } from "../auth.service";
import { Autor } from "../autor";
import { AutorService } from "../autor.service";



@Component({
  selector: 'app_register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterFormComponent implements OnInit{

  ngOnInit(): void {
  }

  msg: any;
  autor = new Autor();
  errorHandler: any;

  constructor(private auth: AuthService,
    private router: Router,
    private messageService: MessageService,
    private autorService: AutorService
    ) {
  }


  salvar(form: NgForm) {
    this.adicionarUsuario(form);
  }
  adicionarUsuario( form: NgForm) {
    this.autorService.adicionar(this.autor)
    /*.then((sucesso: any) => {
        if (sucesso) {
          this.messageService.add({ severity: 'success', detail: 'Usuário criado com sucesso!' });
          this.router.navigate(['/login'],);
        }
      })*/
      .then(personagemAdicionado => {
        alert('Solicitacao realizada com sucesso!');
        this.router.navigate(['/cadastroPersonagem',personagemAdicionado]);
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

    /*editField: string;
    personList: Array<any> = [
      { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
      { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
      { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
      { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
      { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
    ];

    awaitingPersonList: Array<any> = [
      { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
      { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
      { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
      { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
      { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
    ];

    updateList(id: number, property: string, event: any) {
      const editField = event.target.textContent;
      this.personList[id][property] = editField;
    }

    remove(id: any) {
      this.awaitingPersonList.push(this.personList[id]);
      this.personList.splice(id, 1);
    }

    add() {
      if (this.awaitingPersonList.length > 0) {
        const person = this.awaitingPersonList[0];
        this.personList.push(person);
        this.awaitingPersonList.splice(0, 1);
      }
    }

    changeValue(id: number, property: string, event: any) {
      this.editField = event.target.textContent;
    }

    searchItems() {

    }*/
}
