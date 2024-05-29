import React, { FormEvent, useRef } from 'react'

const Form = () => {

    // useRef hook is used to store a reference to an element
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const person = { name: '', age: 0 };

    // when we talking to server, we shouldn't use preventDefault
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // here nameRef.current == value (which is html element)
        if (nameRef.current !== null)
            person.name = nameRef.current.value;
        if (ageRef.current !== null)
            person.age = parseInt(ageRef.current.value);
        
        // we get json data for submission to server
        console.log(person);
    }
  return (
    <form onSubmit={handleSubmit}> 
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input ref={nameRef} id="name" type="text" className="form-control" />
        </div> 
        <div className="mb-3">
            <label htmlFor="age" className="form-label">age</label>
            <input ref={ageRef} id="age" type="number" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>     
    </form>
  )
}

export default Form