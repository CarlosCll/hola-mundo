import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/GreetingF';
import TaskComponent from './components/pure/task';
import TaskList from './components/containers/task_list';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';
import AllCycle from './hooks/lifecycle/AllCycle';
import EjemploOP from './hooks/lifecycle/EjemploOP';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/containers/father';
import Contacs from './components/pure/contacs';
import ContacsComponent from './components/containers/contacs_comp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Compnente propio Greeting.jsx*/}
        {/* <Greeting name="MARTIN"></Greeting> */}
        {/* <GreetingF name="CARLOS"></GreetingF> */}
        {/* <TaskList></TaskList> */}
        {/* Ejemplo de uso de Hook */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}

        {/* <Ejemplo4 nombre='Martin'> */}
        {/* Todo lo que hay aqui, es tratado como props.children */}
          {/* <h3>
            Contenido del props.children
          </h3>

        </Ejemplo4> */}
        {/* <AllCycle></AllCycle> */}
        {/* <EjemploOP></EjemploOP> */}
        {/* <GreetingStyled name="Martin"></GreetingStyled> */}

      {/* </header> */}

      {/* Gestion de eventos */}
      {/* <Father></Father> */}


      <ContacsComponent></ContacsComponent>
    </div>
  );
}

export default App;
