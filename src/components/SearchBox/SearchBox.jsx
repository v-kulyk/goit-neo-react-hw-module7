import { useId } from "react";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/contactsSlice";

export default function SearchBox() {
  const filterId = useId();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <div>
      <label htmlFor={filterId}>Find contacts by name: </label>
      <input
        name="filter"
        id={filterId}
        type="text"
        disabled={loading}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
