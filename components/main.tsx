'use client'
import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import { Droppable, Droppable2 } from './Droppable';
import { Draggable } from './Draggable';
import { useAtom } from 'jotai';
import { DataAtom, testAtom } from '@/store/data';
import { DropListItemAtoms } from '@/store/data';

function DropItem({DropListItem}){
  const [item, setItem] = useAtom(DropListItem);
  console.log({DropListItem});

  return <>
    <Droppable2 id={DropListItem} updater={() => setItem({"name":"Good"})}>        
      <div>
        <h1>Name: {item.name}</h1>
      </div>
    </Droppable2>
  </>
}

function DropList({ DropListItems }) {
  const itemsList = DropListItems.map((DropListItem) => (
    <DropItem DropListItem={DropListItem} />
  ))

  const draggableMarkup = (
    <Draggable id="draggable">Drag me</Draggable>
  );

  function handleDragEnd(event) {
    //const [item, setItem] = useAtom(event.over.id)
    const {over} = event;
    //setItem((pre) => ({...pre, name: "dropped"}))
    console.log({event});
    over.data.current.updater();
  }
  return <>
    <DndContext onDragEnd={handleDragEnd}>
      {draggableMarkup}
      {itemsList}
    </DndContext>
  </>
}

export function MainComponent() {
  const [all, setAll] = useAtom(DataAtom);
  const [test,setTest] = useAtom(testAtom)
  const [DropListItems] = useAtom(DropListItemAtoms)

  const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">Drag me</Draggable>
  );

  function handleDragEnd(event) {
    const {over} = event;
    setParent(over ? over.id : null);
  }

  return (
    <>
      <h1>{test.text}</h1>
      <button className="border-2" onClick={() => setTest((pre) => ({...pre, text: "hello john"}))}>
        click me
      </button>
      {JSON.stringify(all)}
      <DropList DropListItems={DropListItems} />
      
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

};