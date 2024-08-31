import { createSlice } from '@reduxjs/toolkit'
import anecdotesServices from '../services/anecdotesServices'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload
      return state.map((anecdote) => {
        if (anecdote.id === id) {
          const voted = {
            ...anecdote,
            votes: anecdote.votes + 1,
          }
          return voted
        }
        return anecdote
      })
    },

    appendAnecdotes(state, action) {
      state.push(action.payload)
    },

    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anec = await anecdotesServices.getAll()
    dispatch(setAnecdotes(anec))
  }
}

export const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await anecdotesServices.createNew(content)
    dispatch(appendAnecdotes(newNote))
  }
}

export const updateVotes = (id) => {
  return async (dispatch) => {
    const newVote = await anecdotesServices.votes(id)
    dispatch(vote(newVote.id))
  }
}

export const { vote, appendAnecdotes, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
