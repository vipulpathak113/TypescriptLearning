import "./App.css";
import Greet from "./components/PrimitiveType";
import Person from "./components/ObjectType";
import PersonList from "./components/ArrayType";
import Status from "./components/MultipleType";
import Children from "./components/ChildrenType";
import ReactChildren from "./components/ReactChildrenType";

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
      <Status status="success" />
      <Children>This is children props</Children>
      <ReactChildren><div>This is react node children</div></ReactChildren>
    </div>
  );
}

export default App;
