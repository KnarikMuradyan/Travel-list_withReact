import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import  Stats  from "./Stats";


export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item])

  }

  function handlerDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));

  }

  function handlerToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))

  }

  function handlerClearList() {
    const confirmed = window.confirm("Are you sure you want to clear all items?");
    if (confirmed) setItems([]);
  }


  return <div className="app">
    <Logo />
    <Form onAddItems={handleAddItems} />
    <PackingList items={items} onDeleteItem={handlerDeleteItem} onToggleItem={handlerToggleItem} onClearList={handlerClearList} />
    <Stats items={items} />

  </div>
};





