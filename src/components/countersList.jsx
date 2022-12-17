import React, { useState } from "react";
import Counter from './counter'

const CountersList = () => {
   const initialState = [
      { id: 0, value: 0, name: "Ненужная вещь", price: '200' },
      { id: 1, value: 4, name: "Ложка" },
      { id: 2, value: 0, name: "Вилка" },
      { id: 3, value: 0, name: "Тарелка" },
      { id: 4, value: 0, name: "Набор минималиста" },
   ]

   const [counters, setCounters] = useState(initialState)


   const handelDelete = (id) => {
      console.log('handelDelete: ', id);

      const newCounters = counters.filter((c) => c.id !== id)
      console.log(newCounters);
      setCounters(newCounters)
   }

   const handleReset = () => {
      setCounters(initialState)
      console.log('handle reset');
   }

   const handleIncrement = () => {
      setCounters(counters)
   }

   const handleDecrement = () => {
      setCounters(counters)
   }

   return (
      <>
         {counters.map((count) => (
            <Counter
               key={count.id}
               onDelete={handelDelete}
               onClick={() => (handleIncrement)(handleDecrement)}
               {...count}
            />
         ))}
         <button className="btn btn-primary btn-sm m-2"
            onClick={handleReset}>
            Сброс
         </button>
      </>)

}
export default CountersList