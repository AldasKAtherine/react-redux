import { Searcher } from "./Components/Searcher";
import "./App.css";
import logo from "./statics/logo.svg";
import { Col, Spin } from "antd";
import { PokemonList } from "./Components/PokemonList";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchPokemonsWithDetails } from "./slides/dataSlice";

function App() {
  const pokemons = useSelector((state) => state.data.pokemonsFiltered, shallowEqual);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.ui.loading);
  console.log(pokemons);
  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col span={12} offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
