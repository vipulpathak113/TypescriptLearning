type HTMLProps = {
    variant: 'primary' | 'secondary'
    children : string
  };
  
  function HTML({variant,children}:HTMLProps) {
    return (
      <button className={`class-with-${variant}`}>{children}</button>
    );
  }
  
  export default HTML;
  