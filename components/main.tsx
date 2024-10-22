'use client'
import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import { Droppable } from './Droppable';
import { Draggable } from './Draggable';

export function MainComponent() {
  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">Drag me</Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      {containers.map((id) => (
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : 'Drop here'}
        </Droppable>
      ))}
    </DndContext>
  );

  function handleDragEnd(event) {
    const {over} = event;
    setParent(over ? over.id : null);
  }
};