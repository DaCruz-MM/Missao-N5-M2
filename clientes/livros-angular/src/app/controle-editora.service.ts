import { Injectable } from '@angular/core';
import { Editora } from './editora';

const editoras: Array<Editora> = [
  {
    "codEditora": 1,
    "nome": "Amazon",
  },{
    "codEditora": 2,
    "nome": "Alta Books",
  },{
    "codEditora": 3,
    "nome": "Submarino",
  },
]

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  getNomeEditora(codEditora:number){
    return this.getEditoras().filter((editora) => editora.codEditora === codEditora )[0].nome
  }

  getEditoras(){
    return editoras
  }
}
