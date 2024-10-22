'use client'
import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import { Droppable } from './Droppable';
import { Draggable } from './Draggable';
import { useAtom } from 'jotai';
import { testAtom } from '@/store/data';

export function MainComponent() {
  const [test,setTest] = useAtom(testAtom)

  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">Drag me</Draggable>
  );

  return (
    <>
      <h1>{test.text}</h1>
      <button className="border-2" onClick={() => setTest((pre) => ({...pre, text: "hello john"}))}>
        click me
      </button>
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}

        {containers.map((id) => (
          <Droppable key={id} id={id}>
            {parent === id ? draggableMarkup : 'Drop here'}
          </Droppable>
        ))}
      </DndContext>
    </>
  );

  function handleDragEnd(event) {
    const {over} = event;
    setParent(over ? over.id : null);
  }
};