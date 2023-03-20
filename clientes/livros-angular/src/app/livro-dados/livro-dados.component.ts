import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = {
    codigo: '',
    codEditora: 0,
    titulo: '',
    resumo: '',
    autores: []
  };
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];
  private router: Router;
  private servEditora: ControleEditoraService;
  private servLivro: ControleLivrosService;

  constructor(
    servEditora: ControleEditoraService,
    servLivro: ControleLivrosService,
    router: Router,
  ) {
    this.servEditora = servEditora; 
    this.servLivro = servLivro; 
    this.router = router;
  }

  incluir = () => {
    this.livro.autores = this.autoresForm.split("\n")
    this.livro.codEditora = Number(this.livro.codEditora)
    this.servLivro.incluir(this.livro)
      .then( res => this.router.navigateByUrl('/lista') )
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }
}
