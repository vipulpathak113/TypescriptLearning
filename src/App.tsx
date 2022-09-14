import "./App.css";
import PrimitiveType from "./components/PrimitiveType";
import ObjectType from "./components/ObjectType";
import ArrayType from "./components/ArrayType";
import UnionType from "./components/UnionType";
import Children from "./components/ChildrenType";
import ReactChildren from "./components/ReactChildrenType";
import EventType from "./components/EventType";
import UseState from "./components/useStateType";
import User from "./context/User";
import { UserContextProvider } from "./context/UserContext";
import { Counter } from "./components/ClassComponent";
import Generics from "./components/GenericType";
import HTML from "./components/HTMLProps";
import Polymorphic from "./components/Polymorphic";

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
      <PrimitiveType name="Vipul" />
      <ObjectType name={person} />
      <ArrayType names={personList} />
      <UnionType status="success" />
      <Children>This is children props</Children>
      <ReactChildren>
        <div>This is react node children</div>
      </ReactChildren>
      <EventType
        handleClick={() => {
          alert("This btn click type");
        }}
        handleEventClick={(event) => {
          alert("event type");
        }}
        handleEventWithParamsClick={(event, id) => {
          alert(id);
        }}
        handleChangeEvent={(e) => {
          console.log(e);
        }}
        value=""
      />
      <UseState />
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Counter message="The count is" />
      <Generics
        handleClick={(item) => {
          alert(`Item clicked is ${item}`);
        }}
        items={["I", "am", "groot"]}
      />
      <Generics
        handleClick={(item) => {
          alert(`Item clicked is ${item}`);
        }}
        items={[1, 2, 3]}
      />
      <HTML variant="primary">Primary Button</HTML>
      <Polymorphic as="h2" color="primary" size="lg">Primary</Polymorphic>
      <Polymorphic as="p" color="secondary" size="md">Secondary</Polymorphic>
      <Polymorphic as="label" htmlFor="id" size="sm">Small</Polymorphic>
    </div>
  );
}

export default App;
