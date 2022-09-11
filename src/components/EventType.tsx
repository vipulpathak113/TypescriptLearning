import React from "react";

type EventProps = {
  handleClick: () => void; // fxn return nothing without event
  handleEventClick: (event: React.MouseEvent<HTMLButtonElement>) => void; // fxn return nothing with event
  handleEventWithParamsClick: (event: React.MouseEvent<HTMLButtonElement>,id:number) => void; // fxn return nothing with event n params
  handleChangeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string
};

function Event(props: EventProps) {
  return (
    <>
      <button onClick={props.handleClick}>Button</button>
      <button onClick={props.handleEventClick}>Event Button</button>
      <button onClick={(event)=>props.handleEventWithParamsClick(event,1)}>Event Button with params</button>
      <input type="text" value={props.value} />
    </>
  );
}

export default Event;
