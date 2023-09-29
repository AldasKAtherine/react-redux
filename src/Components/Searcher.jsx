import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setFilter} from "../slides/dataSlice";

const Searcher = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(setFilter(e.target.value));
  }


  return (
    <Input.Search
      required
      onChange={handleOnChange}
      style={{ marginBottom: "10px" }}
      placeholder="Buscar"
    />
  );
};

export { Searcher };
