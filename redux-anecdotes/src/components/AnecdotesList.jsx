import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
const AnecdotesList = () => {
  const anecdotes = useSelector((state) =>
    state.sort((a, b) => b.votes - a.votes)
  );
  const dispatch = useDispatch();
  const voteId = (id) => {
    dispatch(vote(id));
  };
  return (
    <div>
      <h2>Anecdotes List</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteId(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdotesList;
