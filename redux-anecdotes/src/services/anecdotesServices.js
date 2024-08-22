import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const votes = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  const currentVotes = response.data.votes;
  const newVote = currentVotes + 1;
  const updatedResponse = await axios.patch(`${baseUrl}/${id}`, {
    votes: newVote,
  });
  return updatedResponse.data;
};

export default { getAll, createNew, votes };
