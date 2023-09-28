import { Searcher } from "./Components/Searcher";
import "./App.css";
import logo from "./statics/logo.svg";
import { Col, Spin } from "antd";
import { PokemonList } from "./Components/PokemonList";
import { useEffect} from "react";
import { getPokemon } from "./api";
import { getPokemonsWithDetails, setLoading} from "./actions";
import { useDispatch, useSelector } from "react-redux";

//App({ pokemons, setPokemons })
function App() {
  //const [pokemons, setPokemons] = useState([]);
  const pokemons = useSelector(state =>state.pokemons);
  const dispatch = useDispatch();
  const loading = useSelector(state=>state.loading);

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      // const pokemonDetailed = await Promise.all(pokemonsRes.map(poke => getPokemonsDetails(poke)));
      // dispatch(setPokemons(pokemonsRes));
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };
    

    fetchPokemons();
  }, []);
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (<Col span={12} offset={12}>
      <Spin spinning size="large" />
      </Col>) :  (<PokemonList pokemons={pokemons} />)}
    
     
    </div>
  );
}
// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value)),
// });

export default App;