type StatusProps = {
    status: 'loading'|'success'|'error';
  };
  
  function Status(props: StatusProps) {
    let message="";

    if(props.status=="loading"){
        message = "Loading..."
    }
    else if(props.status=="success"){
        message = "Loaded successfully..."
    }
    else if(props.status=="error"){
        message = "Error in loading..."
    }

    return <p>Component is {message}</p>;
  }
  
  export default Status;
  