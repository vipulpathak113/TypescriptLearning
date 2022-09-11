type ChildrenProps = {
    children: string;
  };
  
  function Children(props: ChildrenProps) {
    return <p>{props.children}</p>;
  }
  
  export default Children;
  