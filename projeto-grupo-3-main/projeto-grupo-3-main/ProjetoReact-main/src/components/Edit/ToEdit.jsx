import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const ToEdit = () => {
  const { barra,id } = useParams();

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imgl, setImgl] = useState("");

  useEffect(() => {
    axios.get(`https://projeto-json-server-nine.vercel.app/${barra}/${id}`).then((res) => {
      setNome(res.data.nome);
      setPreco(res.data.preco);
      setDescricao(res.data.descricao);
      setImgl(res.data.imgl);
    });
  }, [id,barra]);

  const data = {
    nome: nome,
    preco: preco,
    descricao: descricao,
    imgl: imgl
  };

  function Atualizar(e) {
    e.preventDefault();
    if (nome.length === " " || descricao.length === " "|| preco.length === " ") {
      alert("Campo em branco")
    } else if (descricao.length > 100) {
      alert("Atingiu o número máximo de caracteres permitidos")
    } else {
      axios.put(`https://projeto-json-server-nine.vercel.app/${barra}/${id}`, data).then(navigate("/hoteis").catch((error) => {
        console.error('Error:', error);
      }));
    }
  }
  const navigate = useNavigate();

  return (<div>
    <div>
      <header>
        <h1>Atualizar quarto da lista {barra}</h1>
      </header>
    </div>

    <main>
      <form className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Nome:</label>
          <input className="form-control"
            value={nome}
            type="text"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label">Preço:</label>
          <input className="form-control"
            value={preco}
            type="text"
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label">Descrição:</label>
          <textarea className="form-control"
            value={descricao}
            type="text"
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
     

       
        <br></br>
        <div className="caixadebotoes">
          <Link to={`/hoteis`} ><button className="botaovoltar">Voltar</button></Link>
          <button className="botaosubmit" type="submit"onClick={Atualizar}>Atualizar</button>
        </div>
      </form>
    </main>
  </div>);
};
export default ToEdit;
