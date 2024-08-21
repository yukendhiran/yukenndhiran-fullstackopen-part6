import AnecdotesForm from "./components/AnecdotesForm";
import AnecdotesList from "./components/AnecdotesList";
import Filter from "./components/Filter";
const App = () => {
  return (
    <div>
      <Filter />
      <AnecdotesForm />
      <AnecdotesList />
    </div>
  );
};

export default App;
