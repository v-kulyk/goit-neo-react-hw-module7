import { useId } from "react";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

export default function SearchBox() {
  const filterId = useId();
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor={filterId}>Find contacts by name: </label>
      <input
        name="filter"
        id={filterId}
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
