import React from 'react'

function NewTask(props) {
  return (
    <>
    <form>
        <input type= "text" name="title" onChange={props.handleChange}/> 
        <textarea type= "text" name="description" onChange={props.handleChange}/>            
        <button type="submit" onClick={props.handleSubmit}>Submit</button>
    </form>
    </>
  )
}

export default NewTask