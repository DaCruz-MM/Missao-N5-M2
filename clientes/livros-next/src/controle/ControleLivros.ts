import { Livro } from '../modelo/Livro';

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
    _id: string | null;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
}

class ControleLivros {
    async obterLivros(){
        let lista: Array<Livro> = [];
        const response = await fetch(baseURL);
        const data = await response.json();

        data.map((livro_:any) => {
            let livro: Livro = {
                codigo: livro_._id,
                codEditora: livro_.codEditora,
                titulo: livro_.titulo,
                resumo: livro_.resumo,
                autores: livro_.autores,
            };
            lista.push(livro);
            return '';
        });
        return lista;
    }

    async incluir(livro: Livro){
        let livro_m: LivroMongo = {
            _id: null,
            codEditora: livro.codEditora,
            titulo: livro.titulo,
            resumo: livro.resumo,
            autores: livro.autores,
        };
        fetch(baseURL, {
            method: "POST",
            body: JSON.stringify(livro_m),
            headers: { 
                "Content-Type": "application/json"
             }
        })
        .then( res => res.ok );
    }

    async excluir(codigo:string){
        fetch(baseURL+'/'+codigo,{method:'DELETE'})
            .then( res => res.ok );
    }
}

export default ControleLivros