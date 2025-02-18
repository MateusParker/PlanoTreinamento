import logo from './logo.svg';
import './App.css';
import '@mui/material';
import Grid from "@mui/material/Grid";
import ImagemLogo from "./Imagens/Logo_Imagem.png"

function App() {
  return (
    <div>

<Grid item xs={12} className='todo'>

    <img src={ImagemLogo} className='imagem-logo'></img>
      <h1>Plano de Treinamento</h1><br />

      <h2>Plano A  -| Superiores</h2>
      <Grid container alignItems="center" justifyContent="center">

        <Grid item xs={10} >

    <p> Esteira 20 minutos </p>
          <p>
            Supino Reto 3x12
            </p>
          <p>
            Peck Deck 3x15
         </p>
          <p>
            Supino Inclinado 4x12
            </p>
          <p>
            Elevação Lateral 3x12
            </p>

            <p>
            Desenvolvimento Maquina 3x12
            </p>
          <p>
            Elevação Frontal 3x12
            </p>
          <p>
            Tríceps Corda 3x13
            </p>

          <p>
            Tríceps Testamaq 3x12
            </p>
  <p> Esteira 20 minutos </p>
        </Grid>



      </Grid>

      <h2>Plano B  -| Costas</h2>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={10} >
        <p> Esteira 25 minutos </p>
          <p>
            Puxada Frente Aberta 3x15
            </p>
          <p>
            Remada Baixa 4x15
            </p>
          <p>
            Remada Unilateral Articulada 3x12
            </p>
          <p>
            Puxada Corda 3x15
            </p>

          <p
          >
            Bíceps Barra W 3X12
            </p>
          <p
          >
            Biceps Alternado 3X12
            </p>

  <p> Esteira 20 minutos </p>
        </Grid>

      </Grid>
      <h2>Plano C  -| Inferiores</h2>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={10} >

    <p> Esteira 25 minutos </p>
          <p>
            Agachamento Pack 3x12
            </p>
          <p>
            Leg Press 3x12
            </p>
          <p>
            Cadeira Extensora 3x12
            </p>
          <p>
            Mesa Flexora 3x12
            </p>

          <p>
            Cadeira Adbutora 3x15
            </p>
          <p>
            Panturrilha Pack 3x15
            </p>
  <p> Esteira 20 minutos </p>

        </Grid>




      </Grid>
      </Grid>

    </div>
  );
}

export default App;
