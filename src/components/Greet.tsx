type GreetProps = {
  name: string;
};

function Greet(props: GreetProps) {
  return <p>My name is {props.name}</p>;
}

export default Greet;
