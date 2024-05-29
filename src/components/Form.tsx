import React, { FormEvent } from 'react'

const Form = () => {
    // handle form submission, preventDefault means to not send data to server
    // when we talking to server, we shouldn't use preventDefault
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log('Submitted');
    }
  return (
    <form onSubmit={handleSubmit}> 
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input id="name" type="text" className="form-control" />
        </div> 
        <div className="mb-3">
            <label htmlFor="age" className="form-label">age</label>
            <input id="age" type="number" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>     
    </form>
  )
}

export default Form