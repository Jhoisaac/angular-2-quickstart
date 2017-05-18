/**
 * Created by jh0n4 on 11/5/17.
 */
import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-body',
  templateUrl: 'body.component.html',
})

export class BodyComponent{
  mostrar:boolean = true;
  nombre: String = 'Jhonatan';
  materia: String = 'Topicos Especiales';
  objetivo: String = 'Aprender Ionic2';

  lista: String[] = ['Jose', 'Luisa', 'Mario', 'Contanza'];
}
