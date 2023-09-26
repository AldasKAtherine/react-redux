import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({name}) => {
  return (
    <Card
      title={name}
      extra={<StarOutlined />}
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
          alt="poke"
        />
      }
    >
      <StarOutlined />
      <Meta description="fire, magic" />
    </Card>
  );
};
export { PokemonCard };
