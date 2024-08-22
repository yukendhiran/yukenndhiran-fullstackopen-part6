import { useSelector, useDispatch } from "react-redux";
import { vote, updateVotes } from "../reducers/anecdoteReducer";

import { setNotification } from "../reducers/notificationReducer";
const AnecdotesList = () => {
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter == " ") {
      return anecdotes.sort((a, b) => b.votes - a.votes);
    }

    return anecdotes
      .filter((anecdote) =>
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => b.votes - a.votes);
  });

  const dispatch = useDispatch();
  const voteId = (anecdote) => {
    console.log(anecdote);
    dispatch(updateVotes(anecdote.id));
    dispatch(setNotification(` voted '${anecdote.content}'`), 5);
  };
  return (
    <div>
      <h2>Anecdotes List</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteId(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdotesList;
