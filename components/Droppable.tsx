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