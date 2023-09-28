
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slides/dataSlice";



const PokemonCard = ({name, image, types, id, favorite}) => {

const dispatch = useDispatch();

const typeString = types.map(elem=>elem.type.name).join(', ');

const handleOnFavorite = () =>{
dispatch(setFavorite({pokemonId: id}));
}
  return (
    <Card
      title={name}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
      cover={
        <img
          src={image}
          alt={name}
        />
      }
    >
      
      <Meta description={typeString} />
    </Card>
  );
};
export { PokemonCard };
