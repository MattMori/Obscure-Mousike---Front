import "./index.scss";
import { useState, useEffect } from "react";
import { DataMusicApi } from "../../api/dataMusicAPi";
import BandCard from "../../components/bandCard/BandCard";

const Bandas = () => {
  const [Bandas, setBandas] = useState([]);

  const fetchData = async () => {
    try {
      const respostaBandas = await DataMusicApi.getBands();
      setBandas(respostaBandas);
      console.log('Resposta de getBands:', respostaBandas);
    } catch (erro) {
      console.error('Erro ao buscar bandas:', erro);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div className="Bandas">
            <h1> Bandas</h1>
        <div className="Bandas-quadrados">
          {Bandas.map((banda) => (
            <BandCard key={banda._id} banda={banda} />
          ))}
        </div>      
    </div>
  );
};

export default Bandas;
