import { Searcher } from './Components/Searcher';
import './App.css';
import logo from './statics/logo.svg';
import { Col } from 'antd';
import { PokemonList } from './Components/PokemonList';
import { useEffect, useState } from 'react';
import { getPokemon } from './api';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(()=>{
    const fetchPokemons = async()=> {
      const pokemonsRes = await await getPokemon();
      setPokemons(pokemonsRes);
    };
    fetchPokemons();
  },[]);
  return (
    <div className="App">
      <Col span={4} offset={10}>
      <img src={logo} alt='Pokedux'/>
      
      </Col>
      <Col span={8} offset={8}>
      <Searcher/>
      </Col>
    <PokemonList pokemons={pokemons}/>

    </div>
  );
}

export default App;
