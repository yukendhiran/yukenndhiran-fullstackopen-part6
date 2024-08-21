import AnecdotesForm from "./components/AnecdotesForm";
import AnecdotesList from "./components/AnecdotesList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
const App = () => {
  return (
    <div>
      <Filter />
      <br />
      <Notification />
      <br />
      <AnecdotesForm />
      <AnecdotesList />
    </div>
  );
};

export default App;
