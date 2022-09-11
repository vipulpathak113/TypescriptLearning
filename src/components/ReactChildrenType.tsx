type ReactChildrenProps = {
    children: React.ReactNode;
  };
  
  function ReactChildren(props: ReactChildrenProps) {
    return <p>{props.children}</p>;
  }
  
  export default ReactChildren;
  