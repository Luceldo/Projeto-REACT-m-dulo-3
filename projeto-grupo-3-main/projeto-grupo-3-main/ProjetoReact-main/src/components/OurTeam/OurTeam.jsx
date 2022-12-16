import hebert from './../../assets/images/hebert_dev.jpg'
import ana from './../../assets/images/ana_dev.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const OurTeam = () => { 

  return <div class="container marketing">
  <div class="row">
  <div class="col-lg-4">
  <img className="foto-contato" src={hebert}/>
  <h2>Hebert Garcia</h2>
    <p id="texto-time">
       Diretor Nacional
      </p>
  </div>

  <div class="col-lg-4">
  <img className="foto-contato" src={ana}/>
  <h2>Ana Carolina</h2>
    <p id="texto-time">
       Diretora Internacional
      </p>
  </div>
  </div>
  </div>;
};


export default OurTeam;

