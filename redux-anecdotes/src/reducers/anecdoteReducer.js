import { createSlice } from "@reduxjs/toolkit";
import anecdotesServices from "../services/anecdotesServices";
const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState1 = anecdotesAtStart.map(asObject);

const createNote1 = (content) => {
  return {
    type: "NEW_ANECDOTE",
    payload: {
      content: content,
      votes: 0,
      id: getId(),
    },
  };
};

const vote1 = (id) => {
  return {
    type: "VOTE",
    payload: {
      id,
    },
  };
};

const reducer = (state = initialState1, action) => {
  let id;
  let voted;

  switch (action.type) {
    case "VOTE":
      id = action.payload.id;
      return state.map((anecdote) => {
        if (anecdote.id === id) {
          voted = {
            ...anecdote,
            votes: anecdote.votes + 1,
          };
          return voted;
        }
        return anecdote;
      });

    case "NEW_ANECDOTE":
      return state.concat(action.payload);
    default:
  }

  return state;
};

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload;
      return state.map((anecdote) => {
        if (anecdote.id === id) {
          const voted = {
            ...anecdote,
            votes: anecdote.votes + 1,
          };
          return voted;
        }
        return anecdote;
      });
    },

    appendAnecdotes(state, action) {
      state.push(action.payload);
    },

    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anec = await anecdotesServices.getAll();
    dispatch(setAnecdotes(anec));
  };
};

export const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await anecdotesServices.createNew(content);
    dispatch(appendAnecdotes(newNote));
  };
};

export const updateVotes = (id) => {
  return async (dispatch) => {
    const newVote = await anecdotesServices.votes(id);
    dispatch(vote(newVote.id));
  };
};

export const { vote, appendAnecdotes, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
