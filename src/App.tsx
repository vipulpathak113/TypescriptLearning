import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const person = {
    first: "Vipul",
    last: "Pathak",
  };

  const personList = [
    {
      first: "first1",
      last: "last1",
    },
    {
      first: "first2",
      last: "last2",
    },
    {
      first: "first3",
      last: "last3",
    },
  ];

  return (
    <div className="App">
      <Greet name="Vipul" />
      <Person name={person} />
      <PersonList names={personList} />
    </div>
  );
}

export default App;
