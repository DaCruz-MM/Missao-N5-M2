import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ControleLivros from './controle/ControleLivros';
import ControleEditoras from './controle/ControleEditora';

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditoras();

export default function LivroDados() {
    const opcoes = controleEditora.getEditoras().map(function(editora) {
        const vetor = {};
        vetor['value'] = editora.codEditora;
        vetor['text'] = editora.nome;
        return vetor;
    });

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0].value);
    const navigate = useNavigate();

    const tratarCombo = (e) => setCodEditora(Number(e.target.value));
    const incluir = (e) => {
        e.preventDefault();
        var livro = {
            codigo: '',
            codEditora: codEditora,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split("\n")
        }
        controleLivro.incluir(livro)
            .then(navigate("/"));
    }

    return(
        <main>
            <h1 className="text-center">Dados do Livro</h1>
            <div className="container mb-4">
                <form className="custom-centered" onSubmit={incluir}>
                    <div className="form-group mb-1">
                        <label htmlFor="titulo">Título</label><br/>
                        <input name="titulo" className="form-control" onChange={(e) => setTitulo(e.target.value)} required></input><br/>
                    </div>

                    <div className="form-group mb-1">
                        <label htmlFor="resumo">Resumo</label><br/>
                        <textarea name="resumo" className="form-control" onChange={(e) => setResumo(e.target.value)} ></textarea><br/>
                    </div>

                    <div className="form-group mb-1">
                        <label htmlFor="editora">Editora</label><br/>
                        <select name="editora" className="form-control" onChange={tratarCombo}>
                            {opcoes.map((opcao, index) => (
                                <option value={opcao.value} key={index}>{opcao.text}</option>
                            ))}
                        </select><br/>
                    </div>

                    <div className="form-group mb-1">
                        <label htmlFor="autores">Autores (1 por linha)</label><br/>
                        <textarea name="autores" className="form-control" onChange={(e) => setAutores(e.target.value)}></textarea><br/>
                    </div>

                    <button className="btn btn-primary" type="submit">Salvar Dados</button>
                </form>
            </div>
        </main>
    );
};