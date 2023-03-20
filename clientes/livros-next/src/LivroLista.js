import { useState, useEffect } from "react";
import ControleLivros from './controle/ControleLivros';
import ControleEditoras from './controle/ControleEditora';

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditoras();

const LinhaLivro = props => {
    const { livro, excluir } = props;
    return (
        <>
            <tr>
                <td>
                    {livro.titulo}
                    <br></br>
                    <button className="btn btn-danger" onClick={excluir}>excluir</button>
                </td>
                <td>{livro.resumo}</td>
                <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
                <td><ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul></td>
            </tr>
        </>
    );
};

export default function LivroLista() {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);
    
    const getLivros = () => {
        controleLivro.obterLivros()
            .then(res => {
                setLivros(res);
            });
    };

    useEffect(() => {
        getLivros()
        setCarregado(true);
    }, [carregado]);

    const excluir = (codigo) => {
        controleLivro.excluir(codigo)
            .then( res => setCarregado(false) );
    };
    
    return(
        <main>
            <h1 className="text-center">Catalogo de Livros</h1>
            <div className="container">
                <table className="table table-dark table-hover vw-100 vh-100">
                    <thead>
                        <tr>
                            <td>Titulo</td>
                            <td>Resumo</td>
                            <td>Editora</td>
                            <td>Autores</td>
                        </tr>
                    </thead>
                    <tbody>
                        { livros && livros.map( (livro,index) => (
                            <LinhaLivro livro={livro} excluir={() => excluir(livro.codigo)} key={index}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};