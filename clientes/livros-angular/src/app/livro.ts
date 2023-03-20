export class Livro {
    codigo: string;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
    
    constructor( codEditora: number, titulo: string, resumo: string, autores: string[]){
        this.codigo = ''
        this.codEditora = codEditora
        this.titulo = titulo
        this.resumo = resumo
        this.autores = autores
    }
}
