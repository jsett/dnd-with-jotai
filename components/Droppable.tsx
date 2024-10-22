import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });  
  
  return (
    <div className="border-2 bg-green-200" ref={setNodeRef}>
      {props.children}
    </div>
  );
}


export function Droppable2(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
    data: {updater: props.updater }
  });

  // console.log("Droppable2")
  // console.log({props})
  
  return (
    <div className="border-2 bg-green-200" ref={setNodeRef}>
      {props.children}
    </div>
  );
}