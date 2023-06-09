import Head from 'next/head'
import { useState } from 'react'
import ToDo from '@/components/ToDo'
import ToDoForm from '@/components/ToDoForm'


export default function Home() {
  const [toDos, setToDos] = useState([
    { text: 'Learn to build a to do app', completed: true },
    { text: 'Deploy it to Vercel', completed: false },
    { text: 'Add to portofolio', completed: false}
  ]);
  
  const addToDo = (toDo) => {
    setToDos([...toDos, toDo]);
  };
  
  const completeToDo = (index) => {
    const newToDos = [...toDos];
    newToDos[index].completed = true;
    setToDos(newToDos);
  };
  
  const removeToDo = (index) => {
    const newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="ToDo app made by Olekoder in Next.13" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app">
    <div className="todo-list">
      {toDos.map((toDo, index) => (
        <ToDo
          key={index}
          index={index}
          toDo={toDo}
          completeToDo={completeToDo}
          removeToDo={removeToDo}
        />
      ))}
      <ToDoForm 
      addToDo={addToDo} 
      />
    </div>
  </div>
    </>
  )
}