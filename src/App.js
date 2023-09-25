import { Searcher } from './Components/Searcher';
import './App.css';
import { Col } from 'antd';
import { PokemonList } from './Components/PokemonList';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
      <Searcher/>
      </Col>
    <PokemonList/>

    </div>
  );
}

export default App;
