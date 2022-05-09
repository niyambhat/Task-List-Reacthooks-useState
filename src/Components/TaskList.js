import React from 'react'

function TaskList(props) {
  return (
    <>
    <ul>
        {props.tasks.map(({title, description, id}, index)=>
        <li key={index}>
            <div><h2>{title}</h2></div>       
            <p>{description}</p></li>)}
    </ul>
    </>
  )
}

export default TaskList