type GenericsProps<T> = {
  items: T[]
  handleClick : (value: T)=>void
};

function Generics<T extends {}>({ items,handleClick }: GenericsProps<T>) {
  return (
    <div>
      <h2>List of items:</h2>
      {items.map((item) => {
        return <div onClick={()=> {handleClick(item)}}> {JSON.stringify(item)}</div>;
      })}
    </div>
  );
}

export default Generics;
