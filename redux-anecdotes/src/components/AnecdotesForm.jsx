import { useDispatch } from "react-redux";
import { createNote } from "../reducers/anecdoteReducer";
const AnecdotesForm = () => {
  const dispatch = useDispatch();

  const create = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(createNote(content));
  };
  return (
    <div>
      <span>AnecdotesForm</span>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdotesForm;
