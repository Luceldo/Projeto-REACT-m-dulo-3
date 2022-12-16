import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import Loading from "./../Loading/Loading"
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const Hotels = () => {
    const [dados, setDados] = useState([]);
    const [barra, setBarra] = useState('');
    const [loading, setLoading] = useState(true);
    const [removerLoading, setRemoverLoading] = useState(false)
  
    useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 2000));
        setLoading((loading) => !loading);
      };
  
      loadData();
    }, [])
  
    let Url = `https://projeto-json-server-nine.vercel.app/` + barra;
    
    function Dadosgerais () {
      setRemoverLoading(true)
      setTimeout(() => {
        axios.get(Url).then((res) => {
          setDados(res.data);
          setRemoverLoading(false)
        }).catch((error) => {
          console.error('Error:', error);
        });
      }, 2000)
    }
    if (loading) {
      return <div>
                  <div>
                     <Loading />
                  </div>
              </div>
    }
    else {
      return (<>
        <motion.div
          initial={{translateX: 0}}
          animate={{translateX: 0}}
          exit={{translateX: -3000, x: 100}}
          transition={{delay: 1}}
        >
          <header className="títuloheader">
            <h1>CONSULTE O MELHOR HOTEL DO MUNDO</h1>
          </header>
          <br></br>
          <main className="backgroundtotal">
            <div className="containerprincipal">
              <aside>
                <img className="imagemdestaquehoteis" src="https://cdn.pixabay.com/photo/2018/02/24/17/17/window-3178666_960_720.jpg" alt="principal"/>
              </aside>
              <article>
                <h3 className="elementocaixatitulo1">PESQUISAR QUARTOS</h3>
           
                <select className="form-select selectmode anv2" onChange={(e) => { const selecao = e.target.value; setBarra(selecao) }}>
                  <option value="Erro">---------</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Executivo">Executivo</option>
                  <option value="Standard">Standard</option>
                </select>
                <br></br>
                <button className="botaobuscar" onClick={Dadosgerais}>Buscar</button>
              </article>
              <div>
                <div>
                  <div>{removerLoading && <Loading />}</div>
                </div>
                <div>
                  {dados.map((data) => {
                    return <div key={data.id}>
                      <div>
                        <div>
                          <img src={data.imgl} alt="imagensbuscadas"/>
                        </div>
                        <div>
                          <ul className="dadosjson">
                            <li>{data.nome}</li>
                            <li>{data.descricao}</li>
                            <li>{data.preco}</li>
                          </ul>
                        </div>
                        <div>
                          <Link to={`/editar/${barra}/${data.id}`}><button className="botaovoltar">Editar</button></Link>
                        </div>
                        <div>
                          <Link to={`/deletar/${barra}/${data.id}`}><button className="botaodeletremover">Deletar</button></Link>
                        </div>
                      </div>
                    </div>
                  })}
                </div>
              </div>
            </div>
          </main>
        </motion.div>
  
      </>)
    }
  };
  export default Hotels;