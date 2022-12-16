import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {motion} from 'framer-motion'

const Delet = () => {
  const { barra,id } = useParams();
  const [dados, setDados] = useState([]);  
  useEffect(() => {
    axios.get(`https://projeto-json-server-nine.vercel.app/${barra}/${id}`).then((res) => {
      setDados(res.data).catch((error) => {
        console.error('Error:', error);
      })
    });
  }, [barra,id]);

  const navigate = useNavigate();

  function deletar() {
    axios.delete(`https://projeto-json-server-nine.vercel.app/${barra}/${id}`).then(navigate("/hoteis").catch((error) => {
      console.error('Error:', error)
    }));
  }

  return(<motion.div
  initial={{translateX: 0}}
  animate={{translateX: 0}}
  exit={{translateX: -3000, x: 100}}
  transition={{delay: 1}}
  >
    <div>
      <header>
        <h1>Remover</h1>
      </header>
    </div>
    <main>
      <div>
        {dados && (
          <div>
            <div>
              <h2>
                Nome: {dados.nome}
              </h2>
              <h2>
                Preço: {dados.preco}
              </h2>
              <h2>
                Descrição: {dados.descricao}
              </h2>
              <h2>
                Foto :{dados.imgl}
              </h2>
            </div>
          </div>)}
      </div>
      <div className="caixadebotoes">
        <Link to={`/hoteis`} ><button className="botaomanter">Manter</button></Link>
        <button className="botaodeletremover" onClick={()=>deletar()}>Remover</button>
      </div>
    </main>
  </motion.div>);
};
  
export default Delet;