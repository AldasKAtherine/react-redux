import { Searcher } from "./Components/Searcher";
import "./App.css";
import logo from "./statics/logo.svg";
import { Col } from "antd";
import { PokemonList } from "./Components/PokemonList";
import { useEffect} from "react";
import { getPokemon } from "./api";
import { connect } from "react-redux";
import { setPokemons as setPokemonsActions } from "./Components/actions";

function App({ pokemons, setPokemons }) {
  //const [pokemons, setPokemons] = useState([]);
  console.log(pokemons);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };

    fetchPokemons();
  }, [setPokemons]);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);