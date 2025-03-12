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
            Cross Over 3x15
         </p>
          <p>
            Crucifixo 4x12
            </p>
          <p>
            Supino Articulado 3x12
            </p>

            <p>
            Elevação Lat Polia 3x12
            </p>
          <p>
            Elevação Frontal 3x12
            </p>
          <p>
            Tríceps Barra 3x13
            </p>

          <p>
            Tríceps Francês Polia 3x12
            </p>
  <p> Esteira 20 minutos </p>
        </Grid>



      </Grid>

      <h2>Plano B  -| Costas</h2>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={10} >
        <p> Esteira 25 minutos </p>
          <p>
            Puxada Frente Fechada 3x15
            </p>
          <p>
            Remeda Uni Polia 4x15
            </p>
          <p>
            Remada Baixa Aberta 3x12
            </p>
          <p>
            Remada Curvada 3x15
            </p>

          <p
          >
           Bicepes Martelo 3X12
            </p>
          <p
          >
            Biceps Polia Reto 3X12
            </p>

  <p> Esteira 20 minutos </p>
        </Grid>

      </Grid>
      <h2>Plano C  -| Inferiores</h2>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={10} >

    <p> Esteira 25 minutos </p>
          <p>
            Sumô 3x12
            </p>
          <p>
            Passada 3x12
            </p>
          <p>
            Extensora 3x12
            </p>
          <p>
            Leg Press 3x12
            </p>

          <p>
            Mesa Flexora 3x15
            </p>
          <p>
            Panturrilha Maq. 3x15
            </p>
  <p> Esteira 20 minutos </p>

        </Grid>




      </Grid>
      </Grid>

    </div>
  );
}

export default App;
