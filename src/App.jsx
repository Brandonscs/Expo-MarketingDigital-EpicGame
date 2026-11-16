import Navbar from "./sections/Navbar";
import Intro from "./sections/Intro";
import Character from "./sections/Character";
import BuyerPersona from "./sections/BuyerPersona";
import Benchmark from "./sections/Benchmark";
import Smart from "./sections/Smart";
import Parrilla from "./sections/Parrilla";
import EjemplosParrilla from "./sections/EjemplosParrilla";
import Metricas from "./sections/Metricas";
import Platforms from "./sections/Platforms";
import Tools from "./sections/Tools";
import StrategyCore from "./sections/StrategyCore";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Character />
      <StrategyCore/>
      <BuyerPersona />
      <Platforms/>
      <Tools/>
      <Benchmark /> 
      <Smart />
      <Parrilla/>
      <EjemplosParrilla/>
      <Metricas/>
    </div>
  );
}

export default App;