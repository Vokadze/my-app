import React, { useState } from "react"
const Counter = (props) => {
   //console.log(props);

   const { value } = props

   //const [value, setValue] = useState(props.value)
   //console.log(value);

   //const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])

   const formatValue = () => {
      return value === 0 ? "empty" : value
   }


   const getBageClasses = () => {
      let classes = "badge m-2 "
      classes += value === 0 ? "bg-warning" : "bg-primary"
      return classes
   }

   const handleIncrement = () => {
      console.log('handle increment');
      //props.value = props.value + 1
      //setValue((prevState) => prevState + 1)
      //console.log(value);
   }

   const handleDecrement = () => {
      console.log('handle decrement');
      //setValue((prevState) => prevState - 1)
      //console.log(value);
   }
   //const handleTagChange = (id) => {
   //setTags(['tag4', 'tag5'])
   //setTags(prevState => prevState.filter(tag => tag !== id))
   //console.log(id);
   //}

   //const renderTags = () => {
   //   return (
   //      tags.length !== 0 &&
   //      tags.map((tag) => (
   //         <li
   //            key={tag}
   //            className="btn btn-primary btn-sm m-2"
   //            onClick={() => handleTagChange(tag)}
   //         >
   //            {tag}
   //         </li>
   //      ))
   //   )
   //}
   //if (tags.length !== 0) {
   //   return <ul>{renderTags()}</ul>
   //}
   //if(tags.length===0)return"No tags"
   //return tags.map(tag => (
   //   <li
   //      key={tag}
   //      className="btn btn-primary btn-sm m-2"
   //      onClick={() => handleTagChange(tag)}
   //   >
   //      {tag}
   //   </li>
   //))
   //}

   return (
      <div>
         {/*<ul>
            {renderTags()}
         </ul>*/}
         {/*<ul>
            <li className="btn btn-primary btn-sm m-2">{tags[0]}</li>
            <li className="btn btn-primary btn-sm m-2">{tags[1]}</li>
            <li className="btn btn-primary btn-sm m-2">{tags[2]}</li>
         </ul>*/}

         {/*<ul className="btn btn-primary btn-sm m-2">
            <li>{tags[0]}</li>
            <li>{tags[1]}</li>
            <li>{tags[2]}</li>
         </ul>*/}

         {/*{props.children}*/}

         <span>{props.name}</span>

         <span className={getBageClasses()}>{formatValue()}</span>

         <button className="btn btn-primary btn-sm m-2"
            onClick={handleIncrement}>
            +
         </button>

         <button className="btn btn-primary btn-sm m-2"
            onClick={handleDecrement}>
            -
         </button>
         <button className="btn btn-danger btn-sm m-2"
            onClick={() => props.onDelete(props.id)}>
            Delete
         </button>
      </div>
   )
}

export default Counter